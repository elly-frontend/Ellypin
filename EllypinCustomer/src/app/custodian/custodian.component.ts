import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { CustodianService } from '../../services/custodian.service';
import { Message, Message_Type } from '../sharedData/message.interface';
import adminPublicKey from '../sharedData/adminPublicKey';
import adminPrivateKey from '../sharedData/adminPrivateKey';
import custodianPrivateKey from '../sharedData/custodianPrivateKey';
import custodianPublicKey from '../sharedData/custodianPublic';
import custodian2PublicKey from '../sharedData/custodian2PublicKey';
import swal from 'sweetalert2';
import * as openpgp from 'openpgp';
declare var $: any;
declare let window: any;

@Component({
  selector: 'app-custodian',
  templateUrl: './custodian.component.html',
  styleUrls: ['./custodian.component.css']
})
export class CustodianComponent implements OnInit {

  public loginForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public error: any;
  public fees: any;
  public assetBalance: any;
  public transferFees: string;
  public buyFees: string;
  public buyMessageArray = [];
  public buyMessageDisplay = [];
  public redeemMessageArray = [];
  public redeemMessageDisplay = [];
  public swapMessageArray = [];
  public swapMessageDisplay = [];
  public custData = {};
  public contractDetails = {};
  public buyObjectSet: any = {};
  public redeemObjectSet: any = {};
  public swapObjectSet: any = {};
  buyIndex: any;
  redeemIndex: any;
  swapIndex: any;
  public redeemCurrentPage: number = 1;
  public buyCurrentPage: number = 1;
  public swapCurrentPage: number = 1;
  public userBalance: any;
  public loading = false;
  public totalSupply: any;
  public totalBurn: any;
  public totalRedeem: any;
  public netToken: any;
  public itemsPerPage: number = 5;
  currentProvider: any;


  constructor(public fb: FormBuilder, public custodianService: CustodianService) {
    this.loginForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'password': ['', Validators.compose([Validators.required])]
    })

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit() {
    $('#login-pop').modal('show');
    this.getCustomerData();
    this.currentProvider = window.web3.currentProvider.networkVersion;

  }

  public async loginSubmit() {
    if (this.loginForm.valid) {
      // console.log('Login:',this.loginForm.value);
      let payload = {
        'loginId': this.loginForm.value.email,
        'loginPin': this.loginForm.value.password,
        'role': 'CUSTODIAN'
      }
      this.error = null;
      this.custodianService.login(payload).subscribe(
        async (data: any) => {
          // console.log(data);
          if (!data.$undefined) {
            $('#login-pop').modal('hide');
            this.getContractData();
            this.getBalance();
            // await this.getMessage();
            await this.getSwapMessages();
            this.getAllFees();
          }
          else {
            this.error = 'Unauthorized login request';
          }
        },
        error => {
          console.log(error);
        },
        () => {
          this.loginForm.reset();
        }
      )
    }
  }

  public async getCustomerData() {
    await this.custodianService.getCustomerData().subscribe(
      (data: any) => {
        // console.log('Data:',data);
        this.custData = data.custData;
      },
      error => {
        console.log(error);
      }
    )
  }

  public getBalance() {
    this.custodianService.getUserBalance('0x1b66a326183A0b67F723A201ED3643b0cd29b40D').then((balance: any) => {
      this.userBalance = balance.c[0];
      // console.log('UserBalance:',this.userBalance);

    });
  }

  public getAllFees() {
    this.custodianService.getAllFees().then(
      (data: any) => {
        // console.log('Data: ',data);
        this.transferFees = data.transfer;
        this.fees = data.redeem;
        this.buyFees = data.buy;
      },
      err => {
        console.log(err);

      }
    )
  }


  public async getContractData() {
    await this.custodianService.getName().then(
      name => {
        // console.log(name);
        this.contractDetails['contractName'] = name;
      }
    )

    await this.custodianService.getSymbol().then(
      symbol => {
        this.contractDetails['symbol'] = symbol;
      }
    )

    await this.custodianService.getDecimal().then(
      symbol => {
        this.contractDetails['decimal'] = symbol;
      }
    )

    await this.custodianService.getTotalSupply().then(
      (supply: any) => {
        // console.log('Supply:',supply);

        this.totalSupply = supply.c[0];
      }
    )

    // await this.custodianService.getTotalBurn().then(
    //   (burn: any) => {
    //     // console.log('Burn:',burn);

    //     this.totalBurn = burn.c[0];
    //   }
    // )

    // await this.custodianService.getUserBalance('0xbd49F20F816C8ff831832F20fF0509A6176F9902').then(
    //   (redeem: any) => {
    //     // console.log('Redeem:',redeem);

    //     this.totalRedeem = parseInt(redeem.c[0]) + parseInt(this.totalBurn);
    //     this.netToken = parseInt(this.totalSupply) + parseInt(this.totalBurn);
    //   }
    // )

    await this.custodianService.getFees().then(
      (data: any) => {
        this.fees = data.c[0];
      }
    )
      .catch(
        (error) => {
          console.log(error);
        }
      )

    if(this.currentProvider == 3){
      this.contractDetails['contractAddress'] = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
    }

    if(this.currentProvider == 4){
      this.contractDetails['contractAddress'] = "0xe12fFbfa5FF156A195b9e52B9D39091253f8DecC";
    }
      
  }



  public async getMessage() {
    this.custodianService.getMessages('CUSTODIAN').subscribe(
      async (data: any) => {
        // console.log('MESSAGEDATA:',data);

        if (data.length > 0) {
          this.buyMessageArray = [];
          this.redeemMessageArray = [];
          data.forEach(
            message => {
              if (message.type == 'BUY') {
                this.buyMessageArray.push(message);
              }
              else {
                this.redeemMessageArray.push(message)
              }
              // this.decrypt(data.message,'custodian');
            }
          )
        }
        let indexBuy = 0, indexRedeem = 0;
        this.buyMessageDisplay = [];
        this.buyMessageArray.forEach(
          async buyMsg => {

            var buyObject = await this.decrypt(buyMsg.message, 'custodian');
            buyObject['_id'] = buyMsg['_id'].$oid;
            this.buyMessageDisplay.push(buyObject);
            this.buyMessageDisplay[indexBuy]['counter'] = this.buyMessageArray[indexBuy]['counter'];
            ++indexBuy;
          }
        )
        this.redeemMessageDisplay = [];
        this.redeemMessageArray.forEach(
          async redeemMsg => {

            var buyObject = await this.decrypt(redeemMsg.message, 'custodian');
            buyObject['_id'] = redeemMsg['_id'].$oid;
            this.redeemMessageDisplay.push(buyObject);
            this.redeemMessageDisplay[indexRedeem]['counter'] = this.redeemMessageArray[indexRedeem]['counter'];
            ++indexRedeem;
          }
        )
      },
      error => {
        console.log(error);
      }
    )

  }

  public async getSwapMessages() {
    this.custodianService.getSwapMessages('CUSTODIAN').subscribe(
      async (data: any) => {
        // console.log('MESSAGEDATA:',data);

        if (data.length > 0) {
          this.buyMessageArray = [];
          this.redeemMessageArray = [];
          this.swapMessageArray = [];
          data.forEach(
            message => {
              if (message.type == 'BUY') {
                this.buyMessageArray.push(message);
              }
              else {
                if (message.type == 'SWAP') {
                  this.swapMessageArray.push(message);
                }
                else {
                  this.redeemMessageArray.push(message)
                }
              }
              // this.decrypt(data.message,'custodian');
            }
          )
        }
        let indexBuy = 0, indexRedeem = 0;
        this.buyMessageDisplay = [];
        this.buyMessageArray.forEach(
          async buyMsg => {

            var buyObject = await this.decrypt(buyMsg.message, 'custodian');
            buyObject['_id'] = buyMsg['_id'].$oid;
            this.buyMessageDisplay.push(buyObject);
            this.buyMessageDisplay[indexBuy]['counter'] = this.buyMessageArray[indexBuy]['counter'];
            ++indexBuy;
          }
        )
        this.redeemMessageDisplay = [];
        this.redeemMessageArray.forEach(
          async redeemMsg => {

            var buyObject = await this.decrypt(redeemMsg.message, 'custodian');
            buyObject['_id'] = redeemMsg['_id'].$oid;
            this.redeemMessageDisplay.push(buyObject);
            this.redeemMessageDisplay[indexRedeem]['counter'] = this.redeemMessageArray[indexRedeem]['counter'];
            ++indexRedeem;
          }
        )
        let indexSwap = 0;
        this.swapMessageDisplay = [];
        this.swapMessageArray.forEach(
          async swapMsg => {
            var swapObject = await this.decrypt(swapMsg.message, 'custodian');
            swapObject['_id'] = swapMsg['_id'].$oid;
            this.swapMessageDisplay.push(swapObject);
            this.swapMessageDisplay[indexSwap]['counter'] = this.swapMessageArray[indexSwap]['counter'];
            ++indexSwap;
          }
        )
      },
      error => {
        console.log(error);
      }
    )
  }

  buyClicked(index) {
    this.buyIndex = index;
    this.buyObjectSet = this.buyMessageDisplay[this.buyIndex];
    this.buyObjectSet.SEND_TOKEN_REQUEST = this.buyObjectSet.SEND_TOKEN_REQUEST || {};
    this.buyObjectSet['serialNo'] = this.buyMessageArray[this.buyIndex]['counter'];
    this.buyObjectSet['totalToken'] = parseInt(this.buyObjectSet['buyFee']) + parseInt(this.buyObjectSet['buyToken']);
    console.log('Index:', this.buyObjectSet);
  }

  redeemClicked(index) {
    this.redeemIndex = index;
    // console.log('displayRedem',this.redeemMessageDisplay);

    this.redeemObjectSet = this.redeemMessageDisplay[this.redeemIndex];
    this.redeemObjectSet[Message_Type.BURN_TOKEN_REQUEST] = this.redeemObjectSet[Message_Type.BURN_TOKEN_REQUEST] || {};
    this.redeemObjectSet['serialNo'] = this.redeemMessageArray[this.redeemIndex]['counter'];
    this.redeemObjectSet['totalToken'] = Math.abs(parseInt(this.redeemObjectSet['redeemFee']) - parseInt(this.redeemObjectSet['redeemToken']));
    // console.log('REdeemObject:', this.redeemObjectSet);

  }

  swapClicked(index) {
    this.swapIndex = index;
    // console.log('displayRedem',this.redeemMessageDisplay);

    this.swapObjectSet = this.swapMessageDisplay[this.swapIndex];
    this.swapObjectSet[Message_Type.SWAP_TOKEN_REQUEST] = this.swapObjectSet[Message_Type.SWAP_TOKEN_REQUEST] || {};
    this.swapObjectSet['serialNo'] = this.swapMessageArray[this.swapIndex]['counter'];
    this.swapObjectSet['totalToken'] = this.swapObjectSet['totalToken'] ? this.swapObjectSet['totalToken'] : Math.abs(parseInt(this.swapObjectSet['swapFee']) - parseInt(this.swapObjectSet['swapToken']));
    console.log(this.swapObjectSet);
    
    // console.log('REdeemObject:', this.redeemObjectSet);

  }

  public async updateBuyObject() {
    // console.log('BUYOBJECT:',this.buyObjectSet);
    if (this.buyObjectSet.SEND_TOKEN_REQUEST) {
      if (this.buyObjectSet.totalToken) {
        $('#buy-kyc').modal('hide');
        this.buyObjectSet.SEND_TOKEN_REQUEST.custodianSet = true;
      }
    }
    this.loading = true;
    console.log('BUYOBJEECTSET:', this.buyObjectSet);

    let admin_message: Message = {} as any;
    admin_message.type = Message_Type.BUY;
    admin_message.counter = this.buyObjectSet['serialNo'];
    admin_message.publicKey = this.buyMessageArray[this.buyIndex].publicKey;
    admin_message.message = await this.encrypt(JSON.stringify(this.buyObjectSet), 'admin');
    let custodian_message: Message = {} as any;
    custodian_message.type = Message_Type.BUY;
    custodian_message.counter = this.buyObjectSet['serialNo'];
    custodian_message.publicKey = this.buyMessageArray[this.buyIndex].publicKey;
    custodian_message.message = await this.encrypt(JSON.stringify(this.buyObjectSet), 'custodian');
    let _id = this.buyMessageArray[this.buyIndex]['_id'].$oid;
    this.custodianService.sendMessage(admin_message, custodian_message, _id).subscribe(
      (data: any) => {
        // console.log(data);

        this.loading = false;
        swal('Request Created Successfully');
        this.buyIndex = null;
        this.buyObjectSet = {};
        this.getSwapMessages();
      },
      error => {
        console.log(error);
        this.loading = false;
      },
      () => {
      }
    )    // this.dataService.sendMessage()
  }

  public async updateRedeemObject() {
    // console.log('REDEEMOBJECT:',this.redeemObjectSet);
    if (this.redeemObjectSet.BURN_TOKEN_REQUEST) {
      if (this.redeemObjectSet.totalToken) {
        $('#redeem-kyc').modal('hide');
        this.redeemObjectSet.BURN_TOKEN_REQUEST.custodianSet = true;
      }
    }
    this.loading = true;
    // console.log('Updated Redeem Object:',this.redeemObjectSet);

    let admin_message: Message = {} as any;
    admin_message.type = Message_Type.REDEEM;
    admin_message.counter = this.redeemObjectSet['serialNo'];
    admin_message.publicKey = this.redeemMessageArray[this.redeemIndex].publicKey;
    admin_message.message = await this.encrypt(JSON.stringify(this.redeemObjectSet), 'admin');
    let custodian_message: Message = {} as any;
    custodian_message.type = Message_Type.REDEEM;
    custodian_message.counter = this.redeemObjectSet['serialNo'];
    custodian_message.publicKey = this.redeemMessageArray[this.redeemIndex].publicKey;
    custodian_message.message = await this.encrypt(JSON.stringify(this.redeemObjectSet), 'custodian');
    let _id = this.redeemMessageArray[this.redeemIndex]['_id'].$oid;
    this.custodianService.sendMessage(admin_message, custodian_message, _id).subscribe(
      (data: any) => {
        // console.log(data);

        swal('Updated Successfully');
        this.redeemIndex = null;
        this.redeemObjectSet = {};
        this.getSwapMessages();
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      },
      () => {
      }
    )

  }

  public async updateSwapObject() {
    if (this.swapObjectSet.SWAP_TOKEN_REQUEST) {
      if (this.swapObjectSet.totalToken) {
        $('#swap-kyc').modal('hide');
        this.swapObjectSet.SWAP_TOKEN_REQUEST.custodianSet = true;
      }
    }
    this.loading = true;
    // console.log('Updated Redeem Object:',this.redeemObjectSet);

    let admin_message: Message = {} as any;
    admin_message.type = Message_Type.SWAP;
    admin_message.counter = this.swapObjectSet['serialNo'];
    admin_message.publicKey = this.swapMessageArray[this.swapIndex].publicKey;
    admin_message.message = await this.encrypt(JSON.stringify(this.swapObjectSet), 'admin');
    let custodian1_message: Message = {} as any;
    custodian1_message.type = Message_Type.SWAP;
    custodian1_message.counter = this.swapObjectSet['serialNo'];
    custodian1_message.publicKey = this.swapMessageArray[this.swapIndex].publicKey;
    custodian1_message.message = await this.encrypt(JSON.stringify(this.swapObjectSet), 'custodian1');
    let custodian2_message: Message = {} as any;
    custodian2_message.type = Message_Type.SWAP;
    custodian2_message.counter = this.swapObjectSet['serialNo'];
    custodian2_message.publicKey = this.swapMessageArray[this.swapIndex].publicKey;
    custodian2_message.message = await this.encrypt(JSON.stringify(this.swapObjectSet), 'custodian2');
    let _id = this.swapMessageArray[this.swapIndex]['_id'].$oid;
    this.custodianService.swapToken(admin_message, custodian1_message, custodian2_message, _id).subscribe(
      (data: any) => {
        // console.log(data);

        swal('Updated Successfully');
        this.swapIndex = null;
        this.swapObjectSet = {};
        this.getSwapMessages();
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      },
      () => {
      }
    )
  }

  public async encrypt(message, encryptionFor) {

    openpgp.initWorker({ path: 'assets/openpgp/dist/openpgp.worker.min.js' });
    // console.log('In encrypt');


    let pubkey: any;
    if (encryptionFor === 'admin') {
      pubkey = adminPublicKey.split("\n").join('\n')
    }
    else {
      if(encryptionFor === 'custodian2'){
        pubkey = custodian2PublicKey.split("\n").join('\n');
      }
      else{
        pubkey = custodianPublicKey.split("\n").join('\n');
      }
    }

    let encryptedData: any = null;

    const options = {
      message: openpgp.message.fromText(message),       // input as Message object
      publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for encryption
    }

    encryptedData = await openpgp.encrypt(options).then(ciphertext => {
      var encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
      return encrypted;
    })

    return encryptedData;

  }

  public async decrypt(encryptedData, role) {

    let privkey: any;
    if (role == 'admin') {
      privkey = adminPrivateKey.replace(/\r/, "").split("\n").join('\n');
    }
    else {
      privkey = custodianPrivateKey.replace(/\r/, "").split("\n").join('\n');
    }

    const passphrase = `
    super long and hard to guess secret
    `
    const privKeyObj = (await openpgp.key.readArmored(privkey)).keys[0];
    // const { workers } = openpgp.getWorker();

    await privKeyObj.decrypt('super long and hard to guess secret');
    // console.log(privKeyObj);

    const options = {
      message: await openpgp.message.readArmored(encryptedData),    // parse armored message
      // publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
      privateKeys: [privKeyObj]                                 // for decryption
    }
    var decryptedMsg = openpgp.decrypt(options).then(plaintext => {
      // console.log(JSON.parse(plaintext.data.toString()))
      return (JSON.parse(plaintext.data.toString()))
    })
    return decryptedMsg;
  }



}
