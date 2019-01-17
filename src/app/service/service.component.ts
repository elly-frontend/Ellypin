import { Component, OnInit, HostListener,  } from '@angular/core';
import { ContractsService } from '../contract.service';
import {Message, Message_Type} from './message.interface';
import adminPublicKey from './adminPublicKey';
import custodianPublicKey from './custodianPublic';
import swal from 'sweetalert2';

import * as jsPDF from 'jspdf'

import { Stitch } from 'mongodb-stitch-browser-sdk'

declare var require: any;
import * as openpgp from 'openpgp';
import { FormBuilder, AbstractControl, FormGroup, Validators, } from '@angular/forms';
import { load } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public balance:any;
  public sendAddr:string;
  public token:string;
  public tokenCount:string;
  public textArea1:string;
  public textArea2:string;
  public client:any;
  public buyForm:FormGroup;
  public redeemForm:FormGroup;
  public tokenToSend:AbstractControl;
  public name:AbstractControl;
  // public address:AbstractControl;
  public bankName:AbstractControl;
  public swiftCode:AbstractControl;
  public accountNumber:AbstractControl;
  public accountName:AbstractControl;
  public redeemToken:AbstractControl;
  public redeemName:AbstractControl;
  public redeemBankName:AbstractControl;
  public redeemSwiftCode:AbstractControl;
  public redeemAccountNumber:AbstractControl;
  public redeemAccountName:AbstractControl;
  public loading:boolean=false;
  public userBalance:string;
  public fees:any;
  public privkey:any;
  public pubkey:any;
  public db:any;
  
  constructor(public cs:ContractsService, public fb:FormBuilder) { 
    this.buyForm = fb.group({
      'tokenToSend':['', Validators.compose([Validators.required, Validators.pattern('[0-9]*$')])],
      'name':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      // 'address':['', Validators.compose([Validators.required])],
      'bankName':['', Validators.compose([Validators.required])],
      'swiftCode':['', Validators.compose([Validators.required,Validators.maxLength(6), Validators.pattern('[0-9]*$')])],
      'accountNumber':['', Validators.compose([Validators.required, Validators.pattern('[0-9]*$')])],
      'accountName':['',Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,50}$/)])]
    })   

    this.tokenToSend = this.buyForm.controls['tokenToSend'];
    this.name = this.buyForm.controls['name'];
    // this.address = this.buyForm.controls['address'];
    this.bankName = this.buyForm.controls['bankName'];
    this.swiftCode = this.buyForm.controls['swiftCode'];
    this.accountNumber = this.buyForm.controls['accountNumber'];
    this.accountName = this.buyForm.controls['accountName'];

    this.redeemForm = fb.group({
      'redeemToken':['', Validators.compose([Validators.required,Validators.maxLength(10), Validators.pattern('[0-9]*$')])],
      'redeemName':['', Validators.compose([Validators.pattern(/^[a-zA-Z ]{0,40}$/)])],
      'redeemBankName':['', Validators.compose([Validators.required, Validators.maxLength(40), Validators.pattern(/^[A-Z]+$/i)])],
      'redeemSwiftCode':['', Validators.compose([Validators.required,Validators.maxLength(6), Validators.pattern('[0-9]*$')])],
      'redeemAccountNumber':['', Validators.compose([Validators.required, Validators.pattern('[0-9]*$')])],
      'redeemAccountName':['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z ]{1,50}$/)])]
    })

    this.redeemToken = this.redeemForm.controls['redeemToken'];
    this.redeemName = this.redeemForm.controls['redeemName'];
    this.redeemBankName = this.redeemForm.controls['redeemBankName'];
    this.redeemSwiftCode = this.redeemForm.controls['redeemSwiftCode'];
    this.redeemAccountNumber = this.redeemForm.controls['redeemAccountNumber'];
    this.redeemAccountName = this.redeemForm.controls['redeemAccountName'];
  }
  ngOnInit() {
    this.getFees();
    this.getBalance();
  }

  getBalance(){
    this.cs.getUserBalance().then(balance => {this.balance = balance;
      this.userBalance = this.balance.c;
      });
  }

  getAccounts(){
    this.cs.getAccount().then(accounts => {
      console.log(accounts);
      
    })
  }

  getName(){
    this.cs.getName().then(
      name => {
        console.log(name);
      }
    )
  }

  transfer(){
    
  }

  showSymbol(){
    this.cs.getSymbol().then(
      symbol => {
        console.log(symbol);
      }
    )
  }

  sendToken(){
    this.cs.transfer(this.sendAddr, parseInt(this.token)).then(
      data => {
        console.log(data);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    
  }

  sendEther(){
    this.cs.sendEther(this.sendAddr, parseInt(this.token))
  }

  sendContractToken(){
    this.cs.sendContractToken(this.sendAddr, parseInt(this.token))
  }

  public async singlePublicKey(message,encryptionFor){

    openpgp.initWorker({ path:'node_modules/openpgp/dist/openpgp.worker.min.js' });
    console.log('In singlePublicKey');
    

    let pubkey:any;
    if(encryptionFor === 'admin'){
      pubkey = adminPublicKey.replace(/\r/, "").split("\n").join('\n')
    }
    else{
      pubkey = custodianPublicKey.replace(/\r/, "").split("\n").join('\n'); 
    }
    
    let encryptedData:any=null;
    
    const options = {
        message: openpgp.message.fromText(message),       // input as Message object
        publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for encryption
    }

    encryptedData =await openpgp.encrypt(options).then(ciphertext => {
        var encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
        return encrypted
    })

    return encryptedData;

  }

  public async decrypt(encrypted){
    
    const privkey = this.textArea1.replace(/\r/, "").split("\n").join('\n');
    

    const passphrase = `
    super long and hard to guess secret
    `
    const privKeyObj = (await openpgp.key.readArmored(privkey)).keys[0];
    // const { workers } = openpgp.getWorker();
    console.log(privKeyObj);
    
    await privKeyObj.decrypt(passphrase);
    console.log(privKeyObj);

      const options = {
          message: await openpgp.message.readArmored(encrypted),    // parse armored message
          // publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
          privateKeys: [privKeyObj]                                 // for decryption
      }
      openpgp.decrypt(options).then(plaintext => {
          console.log(JSON.parse(plaintext.data.toString()))
          return plaintext.data // 'Hello, World!'
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
      pubkey = key.publicKeyArmored; 
      var revocationCertificate = key.revocationCertificate; // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
  })
  this.loading = false;
  this.downloadPdf(pubkey,privkey);
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
      messageToSend.sender = sender;
      messageToSend.receiver = null;
      messageToSend.time = new Date().getTime();

      let message_object = Object.assign({}, this.buyForm.value);
      message_object.publicKey = sender;
      console.log('Message_Object:',message_object);
      console.log('MessageToSend:',messageToSend);      

      let admin_message = Object.assign({}, messageToSend);
      let custodian_message = Object.assign({}, messageToSend);
      custodian_message.message = await this.singlePublicKey(JSON.stringify(message_object),'custodian');
      admin_message.message = await this.singlePublicKey(JSON.stringify(message_object),'admin');

      console.log('Admin_Message:',admin_message);
      console.log('Custodian_message:',custodian_message);
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
      console.log(accounts);
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
      // console.log(JSON.stringify(this.buyForm.value));
      let sender =await this.cs.getAccount().then(accounts => {
        console.log(accounts);
        return accounts;
      });
      let messageToSend:Message = {} as any;
      messageToSend.parentMessage = null;
      messageToSend.type = Message_Type.REDEEM;
      messageToSend.sender = sender;
      messageToSend.receiver = null;
      messageToSend.time = new Date().getTime();

      let message_object = Object.assign({}, this.redeemForm.value);
      message_object.publicKey = sender;    

      let admin_message = Object.assign({}, messageToSend);
      let custodian_message = Object.assign({}, messageToSend);
      custodian_message.message = await this.singlePublicKey(JSON.stringify(message_object),'custodian');
      admin_message.message = await this.singlePublicKey(JSON.stringify(message_object),'admin');

      console.log('Admin_Message:',admin_message);
      console.log('Custodian_message:',custodian_message);
      this.loading = true;
      this.cs.redeemToken(admin_message,custodian_message).subscribe(
        (data:any) => {
          console.log(data);
          swal('Request Created Successfully');
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