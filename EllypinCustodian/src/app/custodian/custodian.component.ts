import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import {Message, Message_Type} from '../sharedData/message.interface';
import adminPublicKey from '../sharedData/adminPublicKey';
import adminPrivateKey from '../sharedData/adminPrivateKey';
import custodianPrivateKey from '../sharedData/custodianPrivateKey';
import custodianPublicKey from '../sharedData/custodianPublic';
import * as openpgp from 'openpgp';
declare var $:any

@Component({
  selector: 'app-custodian',
  templateUrl: './custodian.component.html',
  styleUrls: ['./custodian.component.css']
})
export class CustodianComponent implements OnInit {

  public loginForm:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public error:any;
  public fees:any;
  public assetBalance:any;
  public transferFees:string;
  public buyFees:string;
  public buyMessageArray=[];
  public buyMessageDisplay=[];
  public redeemMessageArray=[];
  public redeemMessageDisplay=[];
  public custData={};
  public contractDetails={};


  constructor(public fb:FormBuilder, public dataService:DataService) {
    this.loginForm = fb.group({
      'email':['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'password':['',Validators.compose([Validators.required])]
    })
    
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
   }

  ngOnInit() {
    $('#login-pop').modal('show');
    this.getCustomerData();
    this.getContractData();
    
  }

  public async loginSubmit(){
    if(this.loginForm.valid){
      // console.log('Login:',this.loginForm.value);
      let payload = {
        'loginId':this.loginForm.value.email,
        'loginPin':this.loginForm.value.password,
        'role':'CUSTODIAN'
      }
      this.error = null;
      this.dataService.login(payload).subscribe(
        async (data:any) => {
          // console.log(data);
          if(!data.$undefined){
            $('#login-pop').modal('hide');
            await this.getMessage();
            this.getAllFees();
          }
          else{
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

  public async getCustomerData(){
    await this.dataService.getCustomerData().subscribe(
      (data:any) => {
        // console.log('Data:',data);
        this.custData = data.custData;
      },
      error => {
        console.log(error);
      }
    )
  }

  public getAllFees(){
    this.dataService.getAllFees().subscribe(
      (data:any)  => {
        console.log(data);
        this.assetBalance = data.assetBalance;
        this.buyFees = data.buyFee;
        this.transferFees = data.transferFee;
      },
      err => {
        console.log(err);
        
      }
    )
  }

  public async getContractData(){
    await this.dataService.getName().then(
      name => {
        // console.log(name);
        this.contractDetails['contractName'] = name;
      }
    )

    await this.dataService.getSymbol().then(
      symbol => {
        this.contractDetails['symbol'] = symbol;
      }
    )

    await this.dataService.getDecimal().then(
      symbol => {
        this.contractDetails['decimal'] = symbol;
      }
    )

    await this.dataService.getFees().then(
      (data:any) => {
        this.fees = data.c[0];        
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )

    this.contractDetails['contractAddress'] = "0x24f5c1b5159c9f643d09358f08fd5b4447a2797e";
  }

  public saveFees(){
    let payload = {
      'buyFee':this.buyFees.toString(),
      'redeemFee':this.fees.toString(),
      'transferFee':this.transferFees.toString(),
      'assetBalance':this.assetBalance.toString()
    }
    this.dataService.saveFees(payload).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }


  public async getMessage(){
    await this.dataService.getMessages('CUSTODIAN').subscribe(
      async (data:any) => {
        if(data.length > 0){
          data.forEach(
            message => {
              if(message.type == 'BUY'){
                this.buyMessageArray.push(message);
              }
              else{
                this.redeemMessageArray.push(message)
              }
              // this.decrypt(data.message,'custodian');
            }
          )
        }
        let indexBuy=0,indexRedeem=0;
        await this.buyMessageArray.forEach(
          async buyMsg => {
            if(indexBuy<5){
              var buyObject = await this.decrypt(buyMsg.message,'custodian');            
              this.buyMessageDisplay.push(buyObject);
              ++indexBuy;
            }
          }
        )
        await this.redeemMessageArray.forEach(
          async buyMsg => {
            if(indexRedeem<5){
              var buyObject = await this.decrypt(buyMsg.message,'custodian');            
              this.redeemMessageDisplay.push(buyObject);
            }
          }
        )
      },
      error => {
        console.log(error);
      }
    )
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
      var decryptedMsg = openpgp.decrypt(options).then(plaintext => {
          // console.log(JSON.parse(plaintext.data.toString()))
          return (JSON.parse(plaintext.data.toString()))
      })
      return decryptedMsg;
  }

  

}
