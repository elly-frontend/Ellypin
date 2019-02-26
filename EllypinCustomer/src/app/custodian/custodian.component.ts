import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { CustodianService } from '../../services/custodian.service';
import {Message, Message_Type} from '../sharedData/message.interface';
import adminPublicKey from '../sharedData/adminPublicKey';
import adminPrivateKey from '../sharedData/adminPrivateKey';
import custodianPrivateKey from '../sharedData/custodianPrivateKey';
import custodianPublicKey from '../sharedData/custodianPublic';
import swal from 'sweetalert2';
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
  public buyObjectSet:any={};
  public redeemObjectSet:any={};
  buyIndex :any;
  redeemIndex:any;
  public redeemCurrentPage: number = 1;
  public buyCurrentPage: number = 1;
  public userBalance:any;
  public loading=false;
  public totalSupply:any;
  public totalBurn:any;
  public totalRedeem:any;
  public netToken:any;
  public itemsPerPage:number=5;


  constructor(public fb:FormBuilder, public custodianService:CustodianService) {
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
      this.custodianService.login(payload).subscribe(
        async (data:any) => {
          // console.log(data);
          if(!data.$undefined){
            $('#login-pop').modal('hide');
            this.getContractData();
            this.getBalance();
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
    await this.custodianService.getCustomerData().subscribe(
      (data:any) => {
        // console.log('Data:',data);
        this.custData = data.custData;
      },
      error => {
        console.log(error);
      }
    )
  }

  public getBalance(){
    this.custodianService.getUserBalance('0x1b66a326183A0b67F723A201ED3643b0cd29b40D').then((balance:any) => {
      this.userBalance = balance.c[0];
      // console.log('UserBalance:',this.userBalance);
      
      });
  }

  public getAllFees(){
    this.custodianService.getAllFees().then(
      (data:any)  => {
        console.log('Data: ',data);
        this.transferFees = data.transfer;
        this.fees = data.redeem;
        this.buyFees = data.buy;
      },
      err => {
        console.log(err);
        
      }
    )
  }


  public async getContractData(){
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
      (supply:any) => {
        console.log('Supply:',supply);
        
        this.totalSupply = supply.c[0];
      }
    )

    await this.custodianService.getTotalBurn().then(
      (burn:any) => {
        console.log('Burn:',burn);
        
        this.totalBurn = burn.c[0];
      }
    )

    await this.custodianService.getUserBalance('0xbd49F20F816C8ff831832F20fF0509A6176F9902').then(
      (redeem:any) => {
        console.log('Redeem:',redeem);
        
        this.totalRedeem = parseInt(redeem.c[0]) + parseInt(this.totalBurn);
        this.netToken = parseInt(this.totalSupply) + parseInt(this.totalBurn);
      }
    )

    await this.custodianService.getFees().then(
      (data:any) => {
        this.fees = data.c[0];        
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )

    this.contractDetails['contractAddress'] = "0x44128f17132ae9aac62ce8a47c0cf5465e225c97";
  }

  

  public async getMessage(){
   this.custodianService.getMessages('CUSTODIAN').subscribe(
      async (data:any) => {
        // console.log('MESSAGEDATA:',data);
        
        if(data.length > 0){
          this.buyMessageArray = [];
          this.redeemMessageArray = [];
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
        this.buyMessageDisplay = [];
        this.buyMessageArray.forEach(
          async buyMsg => {
            
              var buyObject = await this.decrypt(buyMsg.message,'custodian'); 
              buyObject['_id']=buyMsg['_id'].$oid; 
              this.buyMessageDisplay.push(buyObject);
              this.buyMessageDisplay[indexBuy]['counter']=this.buyMessageArray[indexBuy]['counter'];
              ++indexBuy;
          }
        )
        this.redeemMessageDisplay = [];
        this.redeemMessageArray.forEach(
          async redeemMsg => {

              var buyObject = await this.decrypt(redeemMsg.message,'custodian');  
              buyObject['_id']=redeemMsg['_id'].$oid; 
              this.redeemMessageDisplay.push(buyObject);
              this.redeemMessageDisplay[indexRedeem]['counter']=this.redeemMessageArray[indexRedeem]['counter'];
              ++indexRedeem;
          }
        )
      },
      error => {
        console.log(error);
      }
    )

  }

  buyClicked(index){
    console.log('Index:',index);
      this.buyIndex = index;
      this.buyObjectSet = this.buyMessageDisplay[this.buyIndex];
      this.buyObjectSet.SEND_TOKEN_REQUEST = this.buyObjectSet.SEND_TOKEN_REQUEST || {};
      this.buyObjectSet['serialNo']=this.buyMessageArray[this.buyIndex]['counter'];
  }

  redeemClicked(index){
      this.redeemIndex = index;
      // console.log('displayRedem',this.redeemMessageDisplay);
      
      this.redeemObjectSet = this.redeemMessageDisplay[this.redeemIndex];
      this.redeemObjectSet[Message_Type.BURN_TOKEN_REQUEST] = this.redeemObjectSet[Message_Type.BURN_TOKEN_REQUEST] || {};
      this.redeemObjectSet['serialNo']=this.redeemMessageArray[this.redeemIndex]['counter'];
  }

  public async updateBuyObject(){
    // console.log('BUYOBJECT:',this.buyObjectSet);
    if(this.buyObjectSet.SEND_TOKEN_REQUEST){
      if(this.buyObjectSet.SEND_TOKEN_REQUEST.receivedAmount){
        $('#buy-kyc').modal('hide');
        this.buyObjectSet.SEND_TOKEN_REQUEST.custodianSet = true;
      }
    }
    this.loading = true;
    let admin_message:Message = {} as any;
    admin_message.type = Message_Type.BUY;
    admin_message.counter = this.buyObjectSet['serialNo'];
    admin_message.publicKey = this.buyMessageArray[this.buyIndex].publicKey;
     admin_message.message=await this.encrypt(JSON.stringify(this.buyObjectSet),'admin');
    let custodian_message:Message = {} as any;
    custodian_message.type = Message_Type.BUY;
    custodian_message.counter = this.buyObjectSet['serialNo'];
    custodian_message.publicKey = this.buyMessageArray[this.buyIndex].publicKey;
    custodian_message.message=await this.encrypt(JSON.stringify(this.buyObjectSet),'custodian');
    let _id = this.buyMessageArray[this.buyIndex]['_id'].$oid;
    this.custodianService.sendMessage(admin_message,custodian_message,_id).subscribe(
      (data:any) => {
        // console.log(data);
        
        this.loading = false;
        swal('Request Created Successfully');
        this.buyIndex = null;
        this.buyObjectSet = {};
        this.getMessage();
      },
      error => {
        console.log(error);
        this.loading = false;
      },
      () => {
      }
    )    // this.dataService.sendMessage()
  }

  public async updateRedeemObject(){
    // console.log('REDEEMOBJECT:',this.redeemObjectSet);
    if(this.redeemObjectSet.BURN_TOKEN_REQUEST){
      if(this.redeemObjectSet.BURN_TOKEN_REQUEST.redeemAmount){
        $('#redeem-kyc').modal('hide');
        this.redeemObjectSet.BURN_TOKEN_REQUEST.custodianSet = true;
      }
    }
    this.loading = true;
    let admin_message:Message = {} as any;
    admin_message.type = Message_Type.REDEEM;
    admin_message.counter = this.redeemObjectSet['serialNo'];
    admin_message.publicKey = this.redeemMessageArray[this.redeemIndex].publicKey;
     admin_message.message=await this.encrypt(JSON.stringify(this.redeemObjectSet),'admin');
    let custodian_message:Message = {} as any;
    custodian_message.type = Message_Type.REDEEM;
    custodian_message.counter = this.redeemObjectSet['serialNo'];
    custodian_message.publicKey = this.redeemMessageArray[this.redeemIndex].publicKey;
    custodian_message.message=await this.encrypt(JSON.stringify(this.redeemObjectSet),'custodian');
    let _id = this.redeemMessageArray[this.redeemIndex]['_id'].$oid;
    this.custodianService.sendMessage(admin_message,custodian_message,_id).subscribe(
      (data:any) => {
        // console.log(data);
        
        swal('Updated Successfully');
        this.redeemIndex = null;
        this.redeemObjectSet = {};
        this.getMessage();
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

  public async encrypt(message,encryptionFor){

    openpgp.initWorker({ path:'assets/openpgp/dist/openpgp.worker.min.js' });
    // console.log('In encrypt');
    

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
      var decryptedMsg = openpgp.decrypt(options).then(plaintext => {
          // console.log(JSON.parse(plaintext.data.toString()))
          return (JSON.parse(plaintext.data.toString()))
      })
      return decryptedMsg;
  }

  

}
