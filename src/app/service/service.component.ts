import { Component, OnInit, HostListener,DoCheck  } from '@angular/core';
import { ContractsService } from '../contract.service';
import {Message, Message_Type} from './message.interface';
import adminPublicKey from './adminPublicKey';
import adminPrivateKey from './adminPrivateKey';
import custodianPrivateKey from './custodianPrivateKey';
import custodianPublicKey from './custodianPublic';
import swal from 'sweetalert2';
import * as Web3 from 'web3';
declare let window: any;

import * as jsPDF from 'jspdf'

import { Stitch } from 'mongodb-stitch-browser-sdk'

declare var require: any;
import * as openpgp from 'openpgp';
import { FormBuilder, AbstractControl, FormGroup, Validators, } from '@angular/forms';
import { send } from 'q';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public balance:any;
  public tokenCount:string;
  public textArea1:string;
  public textArea2:string;
  public client:any;
  public buyForm:FormGroup;
  public redeemForm:FormGroup;
  public tokenToSend:AbstractControl;
  public name:AbstractControl;
  public email:AbstractControl;
  // public address:AbstractControl;
  public bankName:AbstractControl;
  public swiftCode:AbstractControl;
  public accountNumber:AbstractControl;
  public accountName:AbstractControl;
  public redeemToken:AbstractControl;
  public redeemName:AbstractControl;
  public redeemEmail:AbstractControl;
  public redeemBankName:AbstractControl;
  public redeemSwiftCode:AbstractControl;
  public redeemAccountNumber:AbstractControl;
  public redeemAccountName:AbstractControl;
  public transferForm:FormGroup;
  public sendAddr:AbstractControl;
  public token:AbstractControl;
  public loading:boolean=false;
  public userBalance:number;
  public ethereumAccount:any=null;
  public custodianMessages=[];
  public adminMessages=[];
  public mintAddress:string;
  public mintAmount:number;
  public fees:any=null;
  public privkey:any;
  public pubkey:any;
  public db:any;
  public intervalId:any;
  
  constructor(public cs:ContractsService, public fb:FormBuilder) { 
    this.buyForm = fb.group({
      'tokenToSend':['', Validators.compose([Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])],
      'name':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      // 'address':['', Validators.compose([Validators.required])],
      'email':['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'bankName':['', Validators.compose([Validators.required])],
      'swiftCode':['', Validators.compose([Validators.required,Validators.maxLength(6), Validators.pattern('[0-9]*$')])],
      'accountNumber':['', Validators.compose([Validators.required, Validators.pattern('[0-9]*$')])],
      'accountName':['',Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,50}$/)])]
    })   

    this.tokenToSend = this.buyForm.controls['tokenToSend'];
    this.name = this.buyForm.controls['name'];
    this.email = this.buyForm.controls['email'];
    // this.address = this.buyForm.controls['address'];
    this.bankName = this.buyForm.controls['bankName'];
    this.swiftCode = this.buyForm.controls['swiftCode'];
    this.accountNumber = this.buyForm.controls['accountNumber'];
    this.accountName = this.buyForm.controls['accountName'];

    this.redeemForm = fb.group({
      'redeemToken':['', Validators.compose([Validators.required,Validators.maxLength(10), Validators.pattern(/^[1-9][0-9]*$/)])],
      'redeemName':['', Validators.compose([Validators.pattern(/^[a-zA-Z ]{0,40}$/)])],
      'redeemEmail':['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'redeemBankName':['', Validators.compose([Validators.required, Validators.maxLength(40), Validators.pattern(/^[A-Z]+$/i)])],
      'redeemSwiftCode':['', Validators.compose([Validators.required,Validators.maxLength(6), Validators.pattern(/^[0-9]*$/)])],
      'redeemAccountNumber':['', Validators.compose([Validators.required, Validators.pattern('[0-9]*$')])],
      'redeemAccountName':['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,50}$/)])]
    })

    this.redeemToken = this.redeemForm.controls['redeemToken'];
    this.redeemName = this.redeemForm.controls['redeemName'];
    this.redeemEmail = this.redeemForm.controls['redeemEmail'];
    this.redeemBankName = this.redeemForm.controls['redeemBankName'];
    this.redeemSwiftCode = this.redeemForm.controls['redeemSwiftCode'];
    this.redeemAccountNumber = this.redeemForm.controls['redeemAccountNumber'];
    this.redeemAccountName = this.redeemForm.controls['redeemAccountName'];

    this.transferForm = fb.group({
      'token':['', Validators.compose([Validators.required,Validators.maxLength(10), Validators.pattern(/^[1-9][0-9]*$/)])],
      'sendAddr':['',Validators.compose([Validators.required, Validators.maxLength(60)])]
    })

    this.token = this.transferForm.controls['token'];
    this.sendAddr = this.transferForm.controls['sendAddr'];
  }

  ngOnInit() {
    this.getAdminMessages();
    this.getFees();
    
    this.getAccounts();
    this.intervalId = setInterval(() => {
      this.getAccounts();
     console.log('Printing every 5 seconds');
    }, 5000);
  }

  getBalance(){
    this.cs.getUserBalance().then(balance => {this.balance = balance;
      this.userBalance = this.balance.c;
      });
  }

  public async getAccounts(){
    this.cs.getAccount().then(async accounts => {
      this.ethereumAccount=accounts;
      if(this.ethereumAccount != null){
        await this.getBalance();
        if(this.intervalId){
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


  getName(){
    this.cs.getName().then(
      name => {
        console.log(name);
      }
    )
  }

  showSymbol(){
    this.cs.getSymbol().then(
      symbol => {
        console.log(symbol);
      }
    )
  }

  // sendToken(){
  //   this.cs.transfer(this.sendAddr, parseInt(this.token)).then(
  //     data => {
  //       console.log(data);
  //     }
  //   )
  //   .catch(
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }

  // sendEther(){
  //   this.cs.sendEther(this.sendAddr, parseInt(this.token))
  // }

  sendContractToken(){
    if(this.transferForm.valid){
      console.log('form is valid');
      
      this.cs.sendContractToken(this.transferForm.value.sendAddr, parseInt(this.transferForm.value.token))
    }
  }

  public async encrypt(message,encryptionFor){

    openpgp.initWorker({ path:'node_modules/openpgp/dist/openpgp.worker.min.js' });
    console.log('In encrypt');
    

    let pubkey:any;
    if(encryptionFor === 'admin'){
      pubkey = adminPublicKey.split("\n").join('\n')
    }
    else{
      pubkey = custodianPublicKey.split("\n").join('\n'); 
    }
    
    let encryptedData:any=null;
    
    const options = {
        message: openpgp.message.fromText(message),       // input as Message object
        publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for encryption
    }

    encryptedData =await openpgp.encrypt(options).then(ciphertext => {
        var encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
        return encrypted;
    })

    return encryptedData;

  }

  public async decrypt(encryptedData,role){

    let privkey:any;
    if(role == 'admin'){
      privkey = adminPrivateKey.replace(/\r/, "").split("\n").join('\n');
    }
    else{
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
      openpgp.decrypt(options).then(plaintext => {
          // console.log(JSON.parse(plaintext.data.toString()))
          // return plaintext.data // 'Hello, World!'
      })
  }
  
  public async generateKeys(){
    var options = {
      userIds: [{ name:'asdasd', email:'assad@mial.com' }], // multiple user IDs
      numBits: 4096,                                            // RSA key size
      passphrase: 'super long and hard to guess secret'         // protects the private key
  };
  this.loading=true;
  let privkey:any;
  let pubkey:any;
  await openpgp.generateKey(options).then(function(key) {
      privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
      // console.log('PrivateKey:',privkey);
      pubkey = key.publicKeyArmored; 
      // console.log('PublicKey:',pubkey);
      var revocationCertificate = key.revocationCertificate; // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
  })
  this.loading = false;
  // this.downloadPdf(pubkey,privkey);
}

  public testingHook(){
    this.cs.testHook().subscribe(
      data=>{
        console.log(data);
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  public async sendRequest(){
    if(this.buyForm.valid){
      // console.log(JSON.stringify(this.buyForm.value));
      let sender =await this.cs.getAccount().then(accounts => {
        console.log(accounts);
        return accounts;
      });
      let messageToSend:Message = {} as any;
      messageToSend.parentMessage = null;
      messageToSend.type = Message_Type.BUY;
      messageToSend.time = new Date().getTime();
      messageToSend.email = this.buyForm.value.email;
      messageToSend.publicKey = sender;

      let message_object = Object.assign({}, this.buyForm.value);
      message_object.publicKey = sender;
      delete message_object['email'];
      // console.log('Message_Object:',message_object);
      // console.log('MessageToSend:',messageToSend);      

      let admin_message = Object.assign({}, messageToSend);
      let custodian_message = Object.assign({}, messageToSend);
      custodian_message.message = await this.encrypt(JSON.stringify(message_object),'custodian');
      admin_message.message = await this.encrypt(JSON.stringify(message_object),'admin');

      // console.log('Admin_Message:',admin_message);
      // console.log('Custodian_message:',custodian_message);
      this.loading = true;
      this.cs.sendMessage(admin_message,custodian_message).subscribe(
        (data:any) => {
          console.log(data);
          swal('Request Created Successfully');
          this.buyForm.reset();
        },
        error => {
          console.log(error);
        },
        () => {
          this.loading = false;
        }
      )
    }
  }

  public downloadPdf(pubkey,privkey){
    var doc1 = new jsPDF()
    doc1.setFontSize(8);
    doc1.text(`Public Key:\n ${pubkey}`,10,10);
    doc1.save('PublicKey.pdf');
    var doc2 = new jsPDF()
    doc2.setFontSize(6);
    doc2.text(`Private Key:\n ${privkey}`,10,10);
    doc2.save('PrivateKey.pdf');
  }

  public async toMyEtherScan(){
    let sender =await this.cs.getAccount().then(accounts => {
      // console.log(accounts);
      return accounts;
    })
    window.open(`https://ropsten.etherscan.io/address/${sender}#tokentxns`, "_blank");
  }

  public getFees(){
    this.cs.getFees().then(
      (data:any) => {
        // console.log(data);
        this.fees = data.c[0];        
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
  }

  public async submitRedeem(){
    if(this.redeemForm.valid){
      console.log(JSON.stringify(this.redeemForm.value));
      if(parseInt(this.redeemForm.value.redeemToken)+this.fees > this.userBalance){
        swal('Insufficient no. of tokens',);
        console.log(parseInt(this.redeemForm.value.redeemToken)+this.fees);
        
      }
      else{
        let sender =await this.cs.getAccount().then(accounts => {
          console.log(accounts);
          return accounts;
        });
        let messageToSend:Message = {} as any;
        messageToSend.parentMessage = null;
        messageToSend.type = Message_Type.REDEEM;
        messageToSend.time = new Date().getTime();
        messageToSend.email = this.redeemForm.value.redeemEmail;
        messageToSend.publicKey = sender;
        
        let message_object = Object.assign({}, this.redeemForm.value);
        message_object.publicKey = sender;    
        delete message_object['email'];
  
        let admin_message = Object.assign({}, messageToSend);
        let custodian_message = Object.assign({}, messageToSend);
        custodian_message.message = await this.encrypt(JSON.stringify(message_object),'custodian');
        admin_message.message = await this.encrypt(JSON.stringify(message_object),'admin');
  
        console.log('Admin_Message:',admin_message);
        console.log('Custodian_message:',custodian_message);
        this.loading = true;
        this.cs.redeemToken(admin_message,custodian_message).subscribe(
          (data:any) => {
            console.log(data);
            swal('Request Created Successfully');
            this.burnToken(this.redeemForm.value.redeemToken)
            this.redeemForm.reset();
          },
          error => {
            console.log(error);
          },
          () => {
            this.loading = false;
          }
        )
      }
    }
  }

  public async getAdminMessages(){
    await this.cs.getMessages('ADMIN').subscribe(
      (data:any) => {
        // console.log('ADMIN MESSAGE:',data);
        this.adminMessages = data;
        if(this.adminMessages.length > 0){
          this.decrypt(this.adminMessages[0].message,'admin');
        }
        this.getCustodianMessage();
      },
      error => {
        console.log(error);
      }
    )
  }

  getCustodianMessage(){
    this.cs.getMessages('CUSTODIAN').subscribe(
      (data:any) => {
        // console.log('CUSTODIAN MESSAGE:',data);
        this.custodianMessages = data;
        if(this.custodianMessages.length > 0){
          this.decrypt(this.custodianMessages[0].message,'custodian');
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  burnToken(redeemAmount:number){
    this.cs.burnToken(redeemAmount);
  }

  mintToken(){
    console.log('In mintToken');
    var accountAdmin = '0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834';
    if(this.ethereumAccount.toUpperCase() == accountAdmin.toUpperCase()){
      this.cs.mintToken('0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834',500);
    }else{
      swal({
        type: 'error',
        title: 'Oops...',
        text:'You are not the admin'
      })
    }
  }

  getRedeemBalance(){
    this.cs.getRedeemBalance().then((redeemBalance:any) => {
      console.log(redeemBalance.c[0]);
    });
  }

}
