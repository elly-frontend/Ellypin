import { Component, OnInit, HostListener } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { Message, Message_Type } from '../sharedData/message.interface';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import adminPublicKey from '../sharedData/adminPublicKey';
import custodian2PrivateKey from '../sharedData/custodian2PrivateKey';
import custodian2PublicKey from '../sharedData/custodian2PublicKey';
import custodianPublicKey from '../sharedData/custodianPublic';
import swal from 'sweetalert2';
declare var $: any;
declare let window: any;
import * as openpgp from 'openpgp';
import { ExportToCsv } from 'export-to-csv';
import { DataService } from '../../services/data.service';
import { Contract721Service } from 'src/services/contract721.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public buyForm: FormGroup;
  public buyToken: AbstractControl;
  public buyFee: AbstractControl;
  public buyAmount: any;
  public buyFirstName: AbstractControl;
  public buyLastName: AbstractControl;
  public buyMiddleName: AbstractControl;
  public buyAddress: AbstractControl;
  public buyCity: AbstractControl;
  public buyProvince: AbstractControl;
  public buyCountry: AbstractControl;
  public buyEmail: AbstractControl;
  public buyTel: AbstractControl;
  public buyPostCode: AbstractControl;
  public buyBank: AbstractControl;
  public buyParty: AbstractControl;
  public redeemForm: FormGroup;
  public redeemToken: AbstractControl;
  public redeemFee: AbstractControl;
  public redeemTotal: any;
  public redeemBank: AbstractControl;
  public redeemAccountNumber: AbstractControl;
  public redeemSwiftCode: AbstractControl;
  public redeemBeneficiary: AbstractControl;
  public redeemEmail: AbstractControl;
  public transferForm: FormGroup;
  public transferToken: AbstractControl;
  public transferAddr: AbstractControl;
  public swapForm: FormGroup;
  public swapTotal: any;
  public ethereumAccount: any;
  public intervalId: any;
  public fees: any;
  public buyFeePercent: any;
  public userBalance: any;
  public loading: boolean = false;
  public custData = {};
  public contractDetails = {};
  public assetBalance: any;
  public buyFees: any;
  public transferFees: any;
  public totalSupply: any;
  public totalBurn: any;
  public totalRedeem: any;
  public netToken: any;
  public requestId: any;
  public requestCreated = false;
  currentProvider: any;
  public tokenToMint: any;
  public tokenToRedeem: any;
  public currPod = '';
  public redeem721 = '100000';
  public buy721 = '100005';
  public buy721Fee = 5;
  public transfer721Fees = 2;
  public redeem721Fee = 5;
  public userBalance721: any;
  public tokenId = '';
  public asset721 : any;


  constructor(public contractService: ContractService, public dataService: DataService, public fb: FormBuilder, public contract721Service: Contract721Service) {
    this.buyForm = fb.group({
      'buyToken': ['', Validators.compose([Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])],
      'buyFee': ['', Validators.compose([Validators.required])],
      'buyFirstName': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyMiddleName': ['', Validators.compose([Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyLastName': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyAddress': ['', Validators.compose([Validators.required])],
      'buyCity': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyProvince': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyCountry': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyEmail': ['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'buyTel': ['', Validators.compose([Validators.required])],
      // 'buyBank':['', Validators.compose([Validators.required])],
      'buyPostCode': ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.pattern('[0-9]*$')])],
      // 'buyParty':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
    })

    this.redeemForm = fb.group({
      'redeemToken': ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern(/^[1-9][0-9]*$/)])],
      'redeemFee': ['', Validators.compose([Validators.required])],
      'redeemEmail': ['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'redeemBank': ['', Validators.compose([Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-Z0-9, ]*$')])],
      'redeemSwiftCode': ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.pattern(/^[0-9]*$/)])],
      'redeemAccountNumber': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*$')])],
      'redeemBeneficiary': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9, ]*$')])]
    })

    this.transferForm = fb.group({
      'transferToken': ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern(/^[1-9][0-9]*$/)])],
      'transferAddr': ['', Validators.compose([Validators.required, Validators.maxLength(60)])]
    })

    this.swapForm = fb.group({
      swapToken: ['', Validators.compose([Validators.required])],
      swapFee: ['', Validators.compose([Validators.required])],
      swapEmail: ['', Validators.compose([Validators.required])]
    })

    this.buyToken = this.buyForm.controls['buyToken'];
    this.buyFee = this.buyForm.controls['buyFee'];
    this.buyFirstName = this.buyForm.controls['buyFirstName'];
    this.buyMiddleName = this.buyForm.controls['buyMiddleName'];
    this.buyLastName = this.buyForm.controls['buyLastName'];
    this.buyAddress = this.buyForm.controls['buyAddress'];
    this.buyCity = this.buyForm.controls['buyCity'];
    this.buyProvince = this.buyForm.controls['buyProvince'];
    this.buyCountry = this.buyForm.controls['buyCountry'];
    this.buyEmail = this.buyForm.controls['buyEmail'];
    this.buyTel = this.buyForm.controls['buyTel'];
    // this.buyBank = this.buyForm.controls['buyBank'];
    this.buyPostCode = this.buyForm.controls['buyPostCode'];
    // this.buyParty = this.buyForm.controls['buyParty'];

    this.redeemToken = this.redeemForm.controls['redeemToken'];
    this.redeemFee = this.redeemForm.controls['redeemFee'];
    this.redeemEmail = this.redeemForm.controls['redeemEmail'];
    this.redeemBank = this.redeemForm.controls['redeemBank'];
    this.redeemSwiftCode = this.redeemForm.controls['redeemSwiftCode'];
    this.redeemAccountNumber = this.redeemForm.controls['redeemAccountNumber'];
    this.redeemBeneficiary = this.redeemForm.controls['redeemBeneficiary'];

    this.transferToken = this.transferForm.controls['transferToken'];
    this.transferAddr = this.transferForm.controls['transferAddr'];
  }

  ngOnInit() {

    this.intervalId = setInterval(() => {
      this.getAccounts();
      //  console.log('Printing every 5 seconds');
    }, 2000);
    this.currentProvider = window.web3.currentProvider.networkVersion;
  }

  // @HostListener('click', ['$event'])
  //   onClick(event: MouseEvent) {
  //     console.log('Clicked');
  //     if(this.ethereumAccount){
  //       console.log('Present');

  //     }else{
  //       console.log('Not Present');

  //     }
  // }

  public async getCustomerData() {
    await this.dataService.getCustomerData().subscribe(
      (data: any) => {
        // console.log('Data:',data);
        this.custData = data.custData;
      },
      error => {
        console.log(error);
      }
    )
  }

  public async getContractData() {
    await this.contractService.getName().then(
      name => {
        // console.log(name);
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

    if (this.currentProvider == 3) {
      this.contractDetails['contractAddress'] = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
      this.tokenToMint = 'Pod2';
      this.tokenToRedeem = 'Pod1';
    }

    if (this.currentProvider == 4) {
      this.contractDetails['contractAddress'] = "0xe12fFbfa5FF156A195b9e52B9D39091253f8DecC";
      this.tokenToMint = 'Pod1';
      this.tokenToRedeem = 'Pod2';
    }
  }

  getBalance() {
    this.contractService.getUserBalance().then((balance: any) => {
      this.userBalance = balance.c[0];
      // console.log('UserBalance:',this.userBalance);

    });
    if (this.currentProvider == 3) {
      this.contract721Service.getUserBalance().then((balance721: any) => {
        this.userBalance721 = balance721.c[0];
      });
    }
  }

  getFees() {
    this.dataService.getAllFees().subscribe(
      (data: any) => {
        // console.log('Fees',data.buyFee);
        this.buyFeePercent = data.buyFee;
      },
      error => {
        console.log(error);
      }
    )
  }

  public getAllFees() {
    this.contractService.getAllFees().then(
      (data: any) => {
        this.transferFees = data.transfer;
        this.fees = data.redeem;
        this.buyFees = data.buy;
      },
      err => {
        console.log(err);

      }
    )
  }

  openPopup(popupId, tokenType) {
    // console.log('POPID:',popupId);

    if (this.ethereumAccount) {
      if (((tokenType == 'Pod2') && (this.currentProvider == 4)) || ((this.currentProvider == 3) && ((tokenType == 'Pod1') || (tokenType == 'PodK')))) {
        $(`#${popupId}`).modal('show');
        this.currPod = tokenType;
        if ((popupId == 'redeem-pop') && (tokenType == 'PodK')) {
          this.redeemForm.patchValue({
            redeemToken: 1,
            redeemFee: this.redeem721Fee
          })
          this.redeemTotal = this.redeem721;
        }
        if ((popupId == 'buy-pop') && (tokenType == 'PodK')) {
          this.buyForm.patchValue({
            buyToken: 1,
            buyFee: this.buy721Fee
          })
          this.buyAmount = this.buy721;
        }
        if ((popupId == 'transfer-pop') && (tokenType == 'PodK')) {
          this.transferForm.patchValue({
            transferToken: 1
          })
          // this.buyAmount = this.buy721;
        }
      }
      else {
        if (tokenType == 'Pod2') {
          swal('Switch to Rinkeby Network');
        }
        else {
          swal('Switch to Ropsten Network');
        }
      }
    } else {
      swal('Login to Metamask & connect to our application');
    }
  }

  public async getAccounts() {
    this.contractService.getAccount().then(async accounts => {
      this.ethereumAccount = accounts;
      if (this.ethereumAccount != null) {
        await this.getBalance();
        this.getContractData();
        this.getCustomerData();
        this.getBalance();
        this.getAllFees();
        this.getFees();
        this.totalSupply721();
        if (this.intervalId) {
          clearInterval(this.intervalId);
          // console.log('Interval Id:',this.intervalId);
        }
      }

    })
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  totalSupply721(){
    this.contract721Service.getTotalSupply721().then((res:any) => {
      // console.log(res);
      this.asset721 = res.c[0];
    },
    (err) => {
      console.log(err);
    })
  }

  keyBuy(event) {
    this.buyForm.controls['buyFee'].patchValue(this.buyFees);
    this.buyAmount = parseInt(this.buyForm.value.buyToken) + parseInt(this.buyForm.value.buyFee);
    if (isNaN(this.buyAmount)) {
      this.buyAmount = "";
    }
  }

  keyRedeem(event) {
    this.redeemForm.controls['redeemFee'].patchValue(this.fees);
    this.redeemTotal = parseInt(this.redeemForm.value.redeemToken) - parseInt(this.redeemForm.value.redeemFee);
    if (isNaN(this.redeemTotal)) {
      this.redeemTotal = "";
    }
  }

  keySwap(event) {
    this.swapForm.controls['swapFee'].patchValue(this.fees);
    this.swapTotal = parseInt(this.swapForm.get('swapToken').value) - parseInt(this.swapForm.get('swapFee').value);
    if (isNaN(this.swapTotal)) {
      this.swapTotal = "";
    }
  }

  closeModal(popupId) {
    $(`#${popupId}`).modal('hide');
    this.requestCreated = false;
    this.requestId = '';
    this.redeemForm.reset();
    this.redeemTotal = '';
    this.buyForm.reset();
    this.buyAmount = '';
  }

  burnToken(redeemAmount: number, id) {
    this.contractService.burnToken(redeemAmount).then(() => {
      this.requestId = id;
      // swal({
      //   html:'Request Created Successfully </br> Request Id: '+ id
      // });
    });
  }

  burn721Token(id){
    this.contract721Service.tokenId().then((id721:any) => {
      this.tokenId = id721.c[0];
      this.contract721Service.approveTxn('0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834', this.tokenId).then((approve:any) => {
        this.contract721Service.sendContractToken721('0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834', this.tokenId).then((txn:any) => {
          console.log(txn);
          this.contractService.burnToken(this.redeemForm.value.redeemFee).then(() => {
            this.requestId = id;
          });
        },
        (err) => {
          console.log(err);
        })
      },
      (err) => {
        console.log(err);
      })
    },
    (err) => {
      console.log(err);
    })
  }

  public async buyRequest() {
    if (this.buyForm.valid) {
      // console.log(JSON.stringify(this.buyForm.value));
      let sender = await this.contractService.getAccount().then(accounts => {
        // console.log(accounts);
        return accounts;
      });
      let messageToSend: Message = {} as any;
      // messageToSend.parentMessage = null;
      messageToSend.type = Message_Type.BUY;
      messageToSend.time = new Date().getTime();
      messageToSend.email = this.buyForm.value.buyEmail;
      messageToSend.publicKey = sender;

      let message_object = Object.assign({}, this.buyForm.value);
      message_object.publicKey = sender;
      message_object.type = Message_Type.BUY;
      message_object.KYC = "Not Approved";
      message_object[Message_Type.SEND_TOKEN_REQUEST] = { requestType: this.currPod };
      message_object[Message_Type.SEND_TOKEN_ACKNOWLEDGE] = null;


      delete message_object['email'];

      let admin_message = Object.assign({}, messageToSend);
      let custodian_message = Object.assign({}, messageToSend);
      admin_message.message = await this.encrypt(JSON.stringify(message_object), 'admin');
      // console.log('ADmin:',admin_message,'Custodian:',custodian_message);

      this.loading = true;
      // let a = 5;

      if ((this.currentProvider == 3)) {
        custodian_message.message = await this.encrypt(JSON.stringify(message_object), 'custodian');
        this.dataService.sendMessage(admin_message, custodian_message).subscribe(
          (data: any) => {
            // console.log(data);
            // this.buyAmount = "";
            this.requestCreated = true;
            this.requestId = data;
            // swal({
            //   html:'Request Created Succesfully</br>Request Id:'+data
            // });
            // this.buyForm.reset();
          },
          error => {
            console.log(error);
            this.loading = false;
          },
          () => {
            this.loading = false;
          }
        )
      }
      else {
        custodian_message.message = await this.encrypt(JSON.stringify(message_object), 'custodian2');
        this.dataService.sendMessagePod2(admin_message, custodian_message).subscribe(
          (data: any) => {
            // console.log(data);
            // this.buyAmount = "";
            this.requestCreated = true;
            this.requestId = data;
            // swal({
            //   html:'Request Created Succesfully</br>Request Id:'+data
            // });
            // this.buyForm.reset();
          },
          error => {
            console.log(error);
            this.loading = false;
          },
          () => {
            this.loading = false;
          }
        )
      }

    }
  }

  public async redeemRequest() {
    if (this.redeemForm.valid) {
      if ((this.currPod == 'PodK') && ((parseInt(this.redeemForm.value.redeemToken) > parseInt(this.userBalance721)) || (parseInt(this.redeemForm.value.redeemFee) > parseInt(this.userBalance)))) {
        swal('Insufficient no. of tokens');
        return;
      }
      if ((this.currPod != 'PodK') && (parseInt(this.redeemForm.value.redeemToken) > parseInt(this.userBalance))) {
        swal('Insufficient no. of tokens');
        return;
      }
      let sender = await this.contractService.getAccount().then(accounts => {
        // console.log(accounts);
        return accounts;
      });
      let messageToSend: Message = {} as any;
      // messageToSend.parentMessage = null;
      messageToSend.type = Message_Type.REDEEM;
      messageToSend.time = new Date().getTime();
      messageToSend.email = this.redeemForm.value.redeemEmail;
      messageToSend.publicKey = sender;

      let message_object = Object.assign({}, this.redeemForm.value);
      message_object.publicKey = sender;
      message_object.type = Message_Type.REDEEM;
      delete message_object['email'];
      message_object[Message_Type.KYC] = "Not Approved";
      message_object[Message_Type.BURN_TOKEN_REQUEST] = { requestType: this.currPod };
      message_object[Message_Type.BURN_TOKEN_ACKNOWLEDGE] = null;
      let admin_message = Object.assign({}, messageToSend);
      let custodian_message = Object.assign({}, messageToSend);
      admin_message.message = [];
      admin_message.message.push(await this.encrypt(JSON.stringify(message_object), 'admin'));
      custodian_message.message = [];

      this.loading = true;
      if (this.currentProvider == 3) {
        custodian_message.message.push(await this.encrypt(JSON.stringify(message_object), 'custodian'));
        this.dataService.redeemToken(admin_message, custodian_message).subscribe(
          (data: any) => {
            // console.log(data);
            this.requestCreated = true;
            if(this.currPod == 'PodK'){
              this.burn721Token(data);
            }
            if(this.currPod == 'Pod1'){
              this.burnToken(this.redeemForm.value.redeemToken, data)
            }
          },
          error => {
            console.log(error);
            this.loading = false;
          },
          () => {
            this.loading = false;
          }
        )
      }
      else {
        custodian_message.message.push(await this.encrypt(JSON.stringify(message_object), 'custodian2'));
        this.dataService.redeemTokenPod2(admin_message, custodian_message).subscribe(
          (data: any) => {
            // console.log(data);
            this.requestCreated = true;
            this.burnToken(this.redeemForm.value.redeemToken, data)
          },
          error => {
            console.log(error);
            this.loading = false;
          },
          () => {
            this.loading = false;
          }
        )
      }
    }
  }

  public async swapRequest() {
    if (this.swapForm.valid) {
      if (parseInt(this.swapForm.value.swapToken) > parseInt(this.userBalance)) {
        swal('Insufficient no. of tokens');
      }
      else {
        let sender = await this.contractService.getAccount().then(accounts => {
          // console.log(accounts);
          return accounts;
        });
        let messageToSend: Message = {} as any;
        // messageToSend.parentMessage = null;
        messageToSend.type = Message_Type.SWAP;
        messageToSend.time = new Date().getTime();
        // messageToSend.email = this.swapForm.get('swapEmail').value;
        messageToSend.publicKey = sender;

        let message_object = Object.assign({}, this.swapForm.value);
        message_object.publicKey = sender;
        message_object.type = Message_Type.SWAP;
        // delete message_object['email'];
        message_object[Message_Type.KYC] = "Not Approved";
        message_object[Message_Type.SWAP_TOKEN_REQUEST] = { requestTokenType: (this.currentProvider == 3) ? 'POD2' : 'POD1' };
        message_object[Message_Type.SWAP_TOKEN_ACKNOWLEDGE] = null;
        let admin_message = Object.assign({}, messageToSend);
        let custodian1_message = Object.assign({}, messageToSend);
        let custodian2_message = Object.assign({}, messageToSend);
        admin_message.message = [];
        admin_message.message.push(await this.encrypt(JSON.stringify(message_object), 'admin'));
        custodian1_message.message = [];
        custodian1_message.message.push(await this.encrypt(JSON.stringify(message_object), 'custodian1'));
        custodian2_message.message = [];
        custodian2_message.message.push(await this.encrypt(JSON.stringify(message_object), 'custodian2'));

        this.loading = true;
        this.dataService.swapToken(admin_message, custodian1_message, custodian2_message).subscribe(
          (data: any) => {
            // console.log(data);
            this.requestCreated = true;
            this.burnToken(this.swapForm.get('swapToken').value, data)
          },
          error => {
            console.log(error);
            this.loading = false;
          },
          () => {
            this.loading = false;
          }
        )
      }
    }
  }

  toMyetherScan() {
    if (this.ethereumAccount) {
      window.open(`https://ropsten.etherscan.io/address/${this.ethereumAccount}#tokentxns`, "_blank");
    }
  }

  transferTokens() {
    if (this.transferForm.valid) {
      // console.log('form is valid');
      if(this.currPod == 'PodK'){
        if((this.userBalance721 < 1) || this.userBalance < this.transfer721Fees){
          swal('Insufficient no. of tokens');
          return;
        }
        this.contract721Service.tokenId().then((id721:any) => {
          this.tokenId = id721.c[0];
          this.contract721Service.approveTxn(this.transferForm.value.transferAddr, this.tokenId).then((approve:any) => {
            this.contract721Service.sendContractToken721(this.transferForm.value.transferAddr, this.tokenId).then((txn:any) => {
              console.log(txn);
              this.contractService.burnToken(this.transfer721Fees).then(() => {
                // this.requestId = id;
              });
            },
            (err) => {
              console.log(err);
            })
          },
          (err) => {
            console.log(err);
          })
        },
        (err) => {
          console.log(err);
        })
      }
      else{
        this.contractService.sendContractToken(this.transferForm.value.transferAddr, parseInt(this.transferForm.value.transferToken))
      }
    }
  }

  public async encrypt(message, encryptionFor) {

    openpgp.initWorker({ path: 'assets/openpgp/dist/openpgp.worker.min.js' });
    // console.log('In encrypt');


    let pubkey: any;
    if (encryptionFor === 'admin') {
      pubkey = adminPublicKey.split("\n").join('\n')
    }
    else {
      if (encryptionFor === 'custodian2') {
        pubkey = custodian2PublicKey.split("\n").join('\n');
      }
      else {
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

  exportRopstenCsv(){
    if(this.ethereumAccount){
      this.dataService.etherscan('ropsten', 'address', this.ethereumAccount).subscribe((res:any) => {
        console.log(res);
        var data = [];
        if(res.result.length){
          res.result.forEach(element => {
            var txnDate :any = new Date(parseInt(element.timeStamp));
            let csvObject = {
              hash : element.hash,
              from : element.from,
              to : element.to,
              // date : txnDate.getDate()+'/'+txnDate.getMonth()+1+'/'+txnDate.getYear(),
              amount : element.value,
              token_name : element.tokenName,
              token_symbol : element.tokenSymbol
            }
            data.push(csvObject);
          });
          let todayDate : any = new Date();
          const options = { 
            filename : `Ellypin_Ropsten_${todayDate.getDate()}/${todayDate.getMonth()+1}/${todayDate.getYear()}`,
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true, 
            showTitle: true,
            title: `Ropsten Network`,
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: false,
            headers: ['Transaction Hash', 'From', 'To', 'Amount', 'Token Name', 'Token Symbol' ] 
          };
         
        const csvExporter = new ExportToCsv(options);
         
        csvExporter.generateCsv(data);
        }
      },
      (err:any) => {
        console.log(err);
    
      })
    }
  }

  exportRinkebyCsv(){
    if(this.ethereumAccount){
      this.dataService.etherscan('rinkeby', 'address', this.ethereumAccount).subscribe((res:any) => {
        console.log(res);
        var data = [];
        if(res.result.length){
          res.result.forEach(element => {
            var txnDate :any = new Date(parseInt(element.timeStamp));
            let csvObject = {
              hash : element.hash,
              from : element.from,
              to : element.to,
              // date : txnDate.getDate()+'/'+txnDate.getMonth()+1+'/'+txnDate.getYear(),
              amount : element.value,
              token_name : element.tokenName,
              token_symbol : element.tokenSymbol
            }
            data.push(csvObject);
          });
          let todayDate : any = new Date();
          const options = { 
            filename : `Ellypin_Rinkeby_${todayDate.getDate()}/${todayDate.getMonth()+1}/${todayDate.getYear()}`,
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true, 
            showTitle: true,
            title: 'Rinkeby Network',
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: false,
            headers: ['Transaction Hash', 'From', 'To', 'Amount', 'Token Name', 'Token Symbol' ] 
          };
         
        const csvExporter = new ExportToCsv(options);
         
        csvExporter.generateCsv(data);
        }
      },
      (err:any) => {
        console.log(err);
    
      })
    }
  }

  testApi(){
    this.dataService.etherscan('ropsten', 'address','0x352FF618F729960b5469aA825F7C2d876F67d1C0').subscribe((res:any) => {
      console.log(res);
      
    },
    (err) => {
      console.log(err);
      
    })
  }
}
