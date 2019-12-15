import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ContractService } from '../../services/contract.service';
import { Message, Message_Type } from '../sharedData/message.interface';
import adminPublicKey from '../sharedData/adminPublicKey';
import adminPrivateKey from '../sharedData/adminPrivateKey';
import custodianPrivateKey from '../sharedData/custodianPrivateKey';
import custodianPublicKey from '../sharedData/custodianPublic';
import custodian2PublicKey from '../sharedData/custodian2PublicKey';
import swal from 'sweetalert2';
import * as openpgp from 'openpgp';
import { Contract721Service } from 'src/services/contract721.service';
declare let window: any;
declare var $: any

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
  public swapObjectSet: any = {};
  public redeemObjectSet: any = {};
  public redeemIndex: any;
  public buyIndex: any;
  public swapIndex: any;
  public ethereumAccount: any;
  public intervalId: any;
  public userBalance: any;
  public redeemCurrentPage: number = 1;
  public buyCurrentPage: number = 1;
  public swapCurrentPage: number = 1;
  public loading = false;
  public totalSupply: any;
  public totalBurn: any;
  public totalRedeem: any;
  public netToken: any;
  public kycRedeemValue = "";
  public kycSwapValue = "";
  public kycBuyValue = "";
  public currentProvider : any;
  // public currentRedeemPage:any=0;
  // public currentAdminPage:any=0;
  public itemsPerPage: number = 5;

  constructor(public fb: FormBuilder, public dataService: DataService, public contractService: ContractService, public contract721Service : Contract721Service) {
    this.loginForm = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'password': ['', Validators.compose([Validators.required])]
    })

    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  ngOnInit() {
    $('#login-pop').modal('show');
    this.intervalId = setInterval(() => {
      this.getAccounts();
      //console.log('Printing every 5 seconds');
    }, 5000);
    this.getCustomerData();

    this.currentProvider = window.web3.currentProvider.networkVersion;
    // 
  }

  public async loginSubmit() {
    if (this.loginForm.valid) {
      // //console.log('Login:',this.loginForm.value);
      let payload = {
        'loginId': this.loginForm.value.email,
        'loginPin': this.loginForm.value.password,
        'role': 'ADMIN'
      }
      this.error = null;
      this.dataService.login(payload).subscribe(
        async (data: any) => {
          // //console.log(data);
          if (!data.$undefined) {
            $('#login-pop').modal('hide');
            this.getContractData();
            // await this.getMessage();
            await this.getSwapMessages();
            this.getAllFees();
          }
          else {
            this.error = 'Unauthorized login request';
          }
        },
        error => {
          //console.log(error);
        },
        () => {
          this.loginForm.reset();
        }
      )
    }
  }


  public async getAccounts() {
    this.contractService.getAccount().then(async accounts => {
      this.ethereumAccount = accounts;
      if (this.ethereumAccount != null) {
        await this.getBalance();
        if (this.intervalId) {
          clearInterval(this.intervalId);
          // //console.log('Interval Id:',this.intervalId);
        }
      }

    })
      .catch(
        (error) => {
          //console.log(error);
        }
      )
  }

  public getBalance() {
    this.contractService.getUserBalance().then((balance: any) => {
      this.userBalance = balance.c[0];
      //console.log('UserBalance:',this.userBalance);

    });
  }

  public async getCustomerData() {
    await this.dataService.getCustomerData().subscribe(
      (data: any) => {
        // //console.log('Data:',data);
        this.custData = data.custData;
      },
      error => {
        //console.log(error);
      }
    )
  }

  public getAllFees() {
    this.contractService.getAllFees().then(
      (data: any) => {
        //console.log(data);
        this.transferFees = data.transfer;
        this.fees = data.redeem;
        this.buyFees = data.buy;
      },
      err => {
        //console.log(err);

      }
    )
  }

  public async getContractData() {
    await this.contractService.getName().then(
      name => {
        // //console.log(name);
        this.contractDetails['contractName'] = name;
      }
    )

    await this.contractService.getSymbol().then(
      symbol => {
        this.contractDetails['symbol'] = symbol;
      }
    )

    await this.contractService.getDecimal().then(
      symbol => {
        this.contractDetails['decimal'] = symbol;
      }
    )

    await this.contractService.getTotalSupply().then(
      (supply: any) => {
        this.totalSupply = supply.c[0];
      }
    )

    // await this.contractService.getTotalBurn().then(
    //   (burn: any) => {
    //     this.totalBurn = burn.c[0];
    //   }
    // )

    // await this.contractService.getUserBalance('0xbd49F20F816C8ff831832F20fF0509A6176F9902').then(
    //   (redeem: any) => {
    //     this.totalRedeem = parseInt(redeem.c[0]) + parseInt(this.totalBurn);
    //     this.netToken = parseInt(this.totalSupply) + parseInt(this.totalBurn);
    //   }
    // )

    await this.contractService.getFees().then(
      (data: any) => {
        this.fees = data.c[0];
      }
    )
      .catch(
        (error) => {
          //console.log(error);
        }
      )

      if(this.currentProvider == 3){
        this.contractDetails['contractAddress'] = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
      }
  
      if(this.currentProvider == 4){
        this.contractDetails['contractAddress'] = "0xe12fFbfa5FF156A195b9e52B9D39091253f8DecC";
      }
  }




  setTransferFees() {
    this.contractService.setTransferFees(this.transferFees).then(
      data => {
        //console.log(data);
      },
      error => {
        //console.log(error);
      }
    )
  }

  setRedeemFees() {
    this.contractService.setRedeemFees(this.fees).then(
      data => {
        //console.log(data);
      },
      error => {
        //console.log(error);
      }
    )
  }

  setBuyFees() {
    this.contractService.setBuyFees(this.buyFees).then(
      data => {
        // console.log(data);
      },
      error => {
        //console.log(error);
      }
    )
  }


  public async getMessage() {
    this.loading = true;
    this.dataService.getMessages('ADMIN').subscribe(
      async (data: any) => {
        //console.log('MESSAGEDATA:',data);

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
        //console.log('REDEEMMESSAGE:',this.redeemMessageArray);
        //console.log('BUYMESSAGEARRAY:',this.buyMessageArray);

        let messageToSend: Message = {} as any;
        let buyIndex = 0, redeemIndex = 0;
        this.buyMessageDisplay = [];
        this.buyMessageArray.forEach(
          async buyMsg => {
            var buyObject = await this.decrypt(buyMsg.message, 'admin');
            buyObject['_id'] = buyMsg['_id'].$oid;
            this.buyMessageDisplay.push(buyObject);
            this.buyMessageDisplay[buyIndex]['counter'] = this.buyMessageArray[buyIndex]['counter']
            ++buyIndex;
          }
        )
        this.redeemMessageDisplay = [];
        this.redeemMessageArray.forEach(
          async buyMsg => {
            var redeemObject = await this.decrypt(buyMsg.message, 'admin');
            redeemObject['_id'] = buyMsg['_id'].$oid;
            this.redeemMessageDisplay.push(redeemObject);
            this.redeemMessageDisplay[redeemIndex]['counter'] = this.redeemMessageArray[redeemIndex]['counter']
            ++redeemIndex;
          }
        )

        this.loading = false;
      },
      error => {
        //console.log(error);
        this.loading = false;
      }
    )

  }

  public async getSwapMessages() {
    this.dataService.getSwapMessages('ADMIN').subscribe(
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
                  if (message.type == 'REDEEM') {
                    this.redeemMessageArray.push(message)
                  }
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

            var buyObject = await this.decrypt(buyMsg.message, 'admin');
            if(this.currentProvider == 4){
                if(buyObject.SEND_TOKEN_REQUEST.requestType == 'Pod2'){
                  buyObject['_id'] = buyMsg['_id'].$oid;
                  this.buyMessageDisplay.push(buyObject);
                  this.buyMessageDisplay[indexBuy]['counter'] = this.buyMessageArray[indexBuy]['counter'];
                  ++indexBuy;
                }
            }

            if(this.currentProvider == 3){
                if(buyObject.SEND_TOKEN_REQUEST.requestType == 'Pod1' || buyObject.SEND_TOKEN_REQUEST.requestType == 'PodK' ){
                  buyObject['_id'] = buyMsg['_id'].$oid;
                  this.buyMessageDisplay.push(buyObject);
                  this.buyMessageDisplay[indexBuy]['counter'] = this.buyMessageArray[indexBuy]['counter'];
                  ++indexBuy;
                }
            }
            // if(((this.currentProvider == 4) && (buyObject.SEND_TOKEN_REQUEST.hasProperty('requestType'))) || (((this.currentProvider == 3) && (!buyObject.SEND_TOKEN_REQUEST.hasProperty('requestType'))))){
            //   buyObject['_id'] = buyMsg['_id'].$oid;
            //   this.buyMessageDisplay.push(buyObject);
            //   this.buyMessageDisplay[indexBuy]['counter'] = this.buyMessageArray[indexBuy]['counter'];
            // }
          }
        )
        this.redeemMessageDisplay = [];
        this.redeemMessageArray.forEach(
          async redeemMsg => {

            var redeemObject = await this.decrypt(redeemMsg.message, 'admin');
            if(this.currentProvider == 4){
              if(redeemObject.BURN_TOKEN_REQUEST.requestType == 'Pod2'){
                redeemObject['_id'] = redeemMsg['_id'].$oid;
                this.redeemMessageDisplay.push(redeemObject);
                this.redeemMessageDisplay[indexRedeem]['counter'] = this.redeemMessageArray[indexRedeem]['counter'];
                ++indexRedeem;
              }
            }

            if(this.currentProvider == 3){
              if(redeemObject.BURN_TOKEN_REQUEST.requestType == 'Pod1' || redeemObject.BURN_TOKEN_REQUEST.requestType == 'PodK'){
                redeemObject['_id'] = redeemMsg['_id'].$oid;
                this.redeemMessageDisplay.push(redeemObject);
                this.redeemMessageDisplay[indexRedeem]['counter'] = this.redeemMessageArray[indexRedeem]['counter'];
                ++indexRedeem;
              }
            }
          }
        )
        let indexSwap = 0;
        this.swapMessageDisplay = [];
        this.swapMessageArray.forEach(
          async swapMsg => {
            var swapObject = await this.decrypt(swapMsg.message, 'admin');
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

  public async encrypt(message, encryptionFor) {

    openpgp.initWorker({ path: 'assets/openpgp/dist/openpgp.worker.min.js' });
    //console.log('In encrypt');


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
    // //console.log(privKeyObj);

    const options = {
      message: await openpgp.message.readArmored(encryptedData),    // parse armored message
      // publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
      privateKeys: [privKeyObj]                                 // for decryption
    }
    var decryptedMsg = openpgp.decrypt(options).then(plaintext => {
      // //console.log(JSON.parse(plaintext.data.toString()))
      return (JSON.parse(plaintext.data.toString()))
    })
    return decryptedMsg;
  }

  redeemClicked(index) {
    this.redeemIndex = index;
    //console.log('displayRedem',this.redeemMessageDisplay);
    this.redeemObjectSet = this.redeemMessageDisplay[this.redeemIndex];
    this.redeemObjectSet.BURN_TOKEN_REQUEST = this.redeemObjectSet.BURN_TOKEN_REQUEST || {};
    this.redeemObjectSet['serialNo'] = this.redeemMessageDisplay[this.redeemIndex]['counter'];
    console.log('RedeemObject:', this.redeemObjectSet);

  }

  buyClicked(index) {
    this.buyIndex = index;
    this.buyObjectSet = this.buyMessageDisplay[this.buyIndex];
    this.buyObjectSet['serialNo'] = this.buyMessageDisplay[this.buyIndex]['counter'];
    this.buyObjectSet.SEND_TOKEN_REQUEST = this.buyObjectSet.SEND_TOKEN_REQUEST || {};
  }

  swapClicked(index) {
    this.swapIndex = index;
    //console.log('displayRedem',this.redeemMessageDisplay);
    this.swapObjectSet = this.swapMessageDisplay[this.swapIndex];
    this.swapObjectSet.BURN_TOKEN_REQUEST = this.swapObjectSet.BURN_TOKEN_REQUEST || {};
    this.swapObjectSet['serialNo'] = this.swapMessageArray[this.swapIndex]['counter'];
    // console.log('REdeemObject:', this.redeemObjectSet);

  }

  public async updateBuyMessage() {
    // //console.log(JSON.stringify(this.buyForm.value));

    //console.log('BUYOBJECT:',this.buyObjectSet);

    if (this.kycBuyValue == "Approve") {
      this.buyObjectSet.KYC = this.kycBuyValue;
    }
    this.kycBuyValue = '';
    this.loading = true;
    let admin_message: Message = {} as any;
    admin_message.type = Message_Type.BUY;
    admin_message.counter = this.buyObjectSet['serialNo'];
    admin_message.publicKey = this.buyMessageDisplay[this.buyIndex].publicKey;
    admin_message.message = await this.encrypt(JSON.stringify(this.buyObjectSet), 'admin');
    let custodian_message: Message = {} as any;
    custodian_message.type = Message_Type.BUY;
    custodian_message.counter = this.buyObjectSet['serialNo'];
    custodian_message.publicKey = this.buyMessageDisplay[this.buyIndex].publicKey;
    let _id = this.buyMessageDisplay[this.buyIndex]['_id'];

    if(this.currentProvider == 3){
      custodian_message.message = await this.encrypt(JSON.stringify(this.buyObjectSet), 'custodian');
      this.dataService.sendMessage(admin_message, custodian_message, _id).subscribe(
        (data: any) => {
          //console.log(data);
          this.loading = false;
          $('#buy-kyc').modal('hide');
          swal('Updated Details Successfully');
          this.buyIndex = null;
          this.buyObjectSet = {};
          this.getSwapMessages();
        },
        error => {
          this.loading = false;
          //console.log(error);
        },
        () => {
        }
      )    // this.dataService.sendMessage()
    }else{
      custodian_message.message = await this.encrypt(JSON.stringify(this.buyObjectSet), 'custodian2');
      this.dataService.sendMessagePod2(admin_message, custodian_message, _id).subscribe(
        (data: any) => {
          //console.log(data);
          this.loading = false;
          $('#buy-kyc').modal('hide');
          swal('Updated Details Successfully');
          this.buyIndex = null;
          this.buyObjectSet = {};
          this.getSwapMessages();
        },
        error => {
          this.loading = false;
          //console.log(error);
        },
        () => {
        }
      )
    }



  }

  public async updateRedeemObject() {
    //console.log('REDEEMOBJECT:',this.redeemObjectSet);
    if (this.kycRedeemValue == 'Approve') {
      this.redeemObjectSet.KYC = this.kycRedeemValue;
    }
    this.kycRedeemValue = '';
    if (this.redeemObjectSet.BURN_TOKEN_REQUEST) {
      if (!this.redeemObjectSet.BURN_TOKEN_REQUEST.tokenSet) {
        this.redeemObjectSet.BURN_TOKEN_REQUEST.tokenSet = true;
      }
    }
    this.loading = true;
    let admin_message: Message = {} as any;
    admin_message.type = Message_Type.REDEEM;
    admin_message.counter = this.redeemObjectSet['serialNo'];
    admin_message.publicKey = this.redeemMessageDisplay[this.redeemIndex].publicKey;
    admin_message.message = await this.encrypt(JSON.stringify(this.redeemObjectSet), 'admin');
    let custodian_message: Message = {} as any;
    custodian_message.type = Message_Type.REDEEM;
    custodian_message.counter = this.redeemObjectSet['serialNo'];
    custodian_message.publicKey = this.redeemMessageDisplay[this.redeemIndex].publicKey;
    let _id = this.redeemMessageDisplay[this.redeemIndex]['_id'];

    if(this.currentProvider == 3){
      custodian_message.message = await this.encrypt(JSON.stringify(this.redeemObjectSet), 'custodian');
      this.dataService.sendMessage(admin_message, custodian_message, _id).subscribe(
        (data: any) => {
          //console.log(data);
          this.loading = false;
          $('#redeem-kyc').modal('hide');
          swal('Updated Details Successfully');
          this.redeemIndex = null;
          this.redeemObjectSet = {};
          this.getSwapMessages();
        },
        error => {
          this.loading = false;
          //console.log(error);
        },
        () => {
        }
      )
    }
    else{
      custodian_message.message = await this.encrypt(JSON.stringify(this.redeemObjectSet), 'custodian2');
      this.dataService.sendMessagePod2(admin_message, custodian_message, _id).subscribe(
        (data: any) => {
          //console.log(data);
          this.loading = false;
          $('#redeem-kyc').modal('hide');
          swal('Updated Details Successfully');
          this.redeemIndex = null;
          this.redeemObjectSet = {};
          this.getSwapMessages();
        },
        error => {
          this.loading = false;
          //console.log(error);
        },
        () => {
        }
      )
    }
  }

  public async updateSwapObject() {
    //console.log('REDEEMOBJECT:',this.redeemObjectSet);
    if (this.kycSwapValue == 'Approve') {
      this.swapObjectSet.KYC = this.kycSwapValue;
    }
    this.kycSwapValue = '';
    if (this.swapObjectSet.SWAP_TOKEN_REQUEST) {
      if (!this.swapObjectSet.SWAP_TOKEN_REQUEST.tokenSet) {
        this.swapObjectSet.SWAP_TOKEN_REQUEST.tokenSet = true;
      }
    }
    this.loading = true;
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
    this.dataService.swapToken(admin_message, custodian1_message, custodian2_message, _id).subscribe(
      (data: any) => {
        //console.log(data);
        this.loading = false;
        $('#swap-kyc').modal('hide');
        swal('Updated Details Successfully');
        this.swapIndex = null;
        this.swapObjectSet = {};
        this.getSwapMessages();
      },
      error => {
        this.loading = false;
        //console.log(error);
      },
      () => {
      }
    )
  }

  closeModal() {
    this.kycBuyValue = '';
    this.kycRedeemValue = '';
    this.kycSwapValue = '';
  }

  tempMint() {
    this.contractService.mintToken('0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834', 5);
  }

  mintToken() {
    //console.log('In mintToken');
    if (this.buyObjectSet.SEND_TOKEN_ACKNOWLEDGE != true) {
      this.buyObjectSet.SEND_TOKEN_ACKNOWLEDGE = true;
      if(this.buyObjectSet.SEND_TOKEN_REQUEST.requestType == 'PodK'){
        this.contract721Service.mintToken(this.buyObjectSet.publicKey);
      }
      else{
        this.contractService.mintToken(this.buyObjectSet.publicKey, (parseInt(this.buyObjectSet.totalToken) - parseInt(this.buyObjectSet.buyFee)));
      }
      this.updateBuyMessage();
    }
  }

  mintSwapToken(){
    if (this.swapObjectSet.SWAP_TOKEN_ACKNOWLEDGE != true) {
      this.swapObjectSet.SWAP_TOKEN_ACKNOWLEDGE = true;
      console.log(parseInt(this.swapObjectSet.totalToken));
      
      this.contractService.mintToken(this.swapObjectSet.publicKey, (parseInt(this.swapObjectSet.totalToken) + parseInt(this.buyFees)));
      this.updateSwapObject();
    }
  }

  burnTokens() {
    if (this.redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE != true) {
      this.redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE = true;
      //console.log('REDEEMOBJECT',this.redeemObjectSet);
      $('#redeem-kyc').modal('hide');
      if(this.redeemObjectSet.BURN_TOKEN_REQUEST.requestType == 'PodK'){
        this.contract721Service.getUserBalance().then((res: any) => {
          // console.log(res.c[0]);
          if (res.c[0] > 0) {
            this.contract721Service.tokenId().then((res: any) => {
              // console.log(res.c[0]);
              this.contract721Service.burnTokenFrom721(res.c[0]).then((res) => {
                console.log(res);
                this.updateRedeemObject();
              },
                (err) => {
                  console.log(err);
                })
            },
              (err) => {
                console.log(err);
    
              })
          }
        })
      }else{
        this.contractService.burnTokenFrom(this.redeemObjectSet.publicKey, (parseInt(this.redeemObjectSet.totalToken))).then(data => {
          this.updateRedeemObject();
        })
      }
    }
  }

  burnSwapTokens(){
    if (!this.swapObjectSet.SWAP_TOKEN_REQUEST.tokenBurned) {
      this.swapObjectSet.SWAP_TOKEN_REQUEST.tokenBurned = true;
      //console.log('REDEEMOBJECT',this.swapObjectSet);
      $('#swap-kyc').modal('hide');
      // console.log(this.swapObjectSet);
      
      // console.log(this.swapObjectSet.publicKey, (parseInt(this.swapObjectSet.totalToken) - parseInt(this.swapObjectSet.swapFee)));
      
      this.contractService.burnTokenFrom(this.swapObjectSet.publicKey, (parseInt(this.swapObjectSet.totalToken))).then(data => {
        this.updateSwapObject();
      })
    }
  }

  // testPod2Mint(){
  //   this.contractService.mintToken('0x06eb21742e5462c065272363aa272428a113a79a', 4);
  // }

  showBuy(){
    // console.log('BUYARRAY:', this.buyMessageArray);
    //     console.log('BUYDISPLAY:', this.buyMessageDisplay);
  }


}
