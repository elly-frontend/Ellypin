import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ContractService } from '../../services/contract.service';
import {Message, Message_Type} from '../sharedData/message.interface';
import adminPublicKey from '../sharedData/adminPublicKey';
import adminPrivateKey from '../sharedData/adminPrivateKey';
import custodianPrivateKey from '../sharedData/custodianPrivateKey';
import custodianPublicKey from '../sharedData/custodianPublic';
import swal from 'sweetalert2';
import * as openpgp from 'openpgp';
declare var $:any

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
  public buyObjectSet:any = {};
  public redeemObjectSet:any={};
  public redeemIndex:any;
  public buyIndex:any;
  public ethereumAccount:any;
  public intervalId:any;
  public userBalance:any;
  public redeemCurrentPage: number = 1;
  public buyCurrentPage: number = 1;
  public loading=false;
  public totalSupply:any;
  public totalBurn:any;
  public totalRedeem:any;
  public netToken:any;
  // public currentRedeemPage:any=0;
  // public currentAdminPage:any=0;
  public itemsPerPage:number=5;

  constructor(public fb:FormBuilder, public dataService:DataService, public contractService:ContractService) {
    this.loginForm = fb.group({
      'email':['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'password':['',Validators.compose([Validators.required])]
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
    // 
  }

  public async loginSubmit(){
    if(this.loginForm.valid){
      // //console.log('Login:',this.loginForm.value);
      let payload = {
        'loginId':this.loginForm.value.email,
        'loginPin':this.loginForm.value.password,
        'role':'ADMIN'
      }
      this.error = null;
      this.dataService.login(payload).subscribe(
        async (data:any) => {
          // //console.log(data);
          if(!data.$undefined){
            $('#login-pop').modal('hide');
            this.getContractData();
            await this.getMessage();
            this.getAllFees();
          }
          else{
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


  public async getAccounts(){
    this.contractService.getAccount().then(async accounts => {
      this.ethereumAccount=accounts;
      if(this.ethereumAccount != null){
        await this.getBalance();
        if(this.intervalId){
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

  public getBalance(){
    this.contractService.getUserBalance().then((balance:any) => {
      this.userBalance = balance.c[0];
      //console.log('UserBalance:',this.userBalance);
      
      });
  }

  public async getCustomerData(){
    await this.dataService.getCustomerData().subscribe(
      (data:any) => {
        // //console.log('Data:',data);
        this.custData = data.custData;
      },
      error => {
        //console.log(error);
      }
    )
  }

  public getAllFees(){
    this.contractService.getAllFees().then(
      (data:any)  => {
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

  public async getContractData(){
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
      (supply:any) => {
        this.totalSupply = supply.c[0];
      }
    )

    await this.contractService.getTotalBurn().then(
      (burn:any) => {
        this.totalBurn = burn.c[0];
      }
    )

    await this.contractService.getUserBalance('0xbd49F20F816C8ff831832F20fF0509A6176F9902').then(
      (redeem:any) => {
        this.totalRedeem = parseInt(redeem.c[0]) + parseInt(this.totalBurn);
        this.netToken = parseInt(this.totalSupply) + parseInt(this.totalRedeem);
      }
    )

    await this.contractService.getFees().then(
      (data:any) => {
        this.fees = data.c[0];        
      }
    )
    .catch(
      (error) => {
        //console.log(error);
      }
    )

    this.contractDetails['contractAddress'] = "0xd60b94da7ac581352bf6aefff355d1072bc13910";
  }


  

  setTransferFees(){
    this.contractService.setTransferFees(this.transferFees).then(
      data => {
        //console.log(data);
      },
      error => {
        //console.log(error);
      }
    )
  }

  setRedeemFees(){
    this.contractService.setRedeemFees(this.fees).then(
      data => {
        //console.log(data);
      },
      error => {
        //console.log(error);
      }
    )
  }

  setBuyFees(){
    this.contractService.setBuyFees(this.buyFees).then(
      data => {
        //console.log(data);
      },
      error => {
        //console.log(error);
      }
    )
  }


  public async getMessage(){
    this.loading = true;
    this.dataService.getMessages('ADMIN').subscribe(
       async (data:any) => {
         //console.log('MESSAGEDATA:',data);
         
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
         //console.log('REDEEMMESSAGE:',this.redeemMessageArray);
         //console.log('BUYMESSAGEARRAY:',this.buyMessageArray);
         
         let messageToSend:Message = {} as any;
         let buyIndex=0, redeemIndex=0;
         this.buyMessageDisplay = [];
         this.buyMessageArray.forEach(
           async buyMsg => {
               var buyObject = await this.decrypt(buyMsg.message,'admin');  
               buyObject['_id']=buyMsg['_id'].$oid;    
               this.buyMessageDisplay.push(buyObject);
               this.buyMessageDisplay[buyIndex]['counter']=this.buyMessageArray[buyIndex]['counter']
               ++buyIndex;
           }
         )
         this.redeemMessageDisplay=[];
         this.redeemMessageArray.forEach(
           async buyMsg => {
               var redeemObject = await this.decrypt(buyMsg.message,'admin'); 
               redeemObject['_id']=buyMsg['_id'].$oid;
               this.redeemMessageDisplay.push(redeemObject);
               this.redeemMessageDisplay[redeemIndex]['counter']=this.redeemMessageArray[redeemIndex]['counter']
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

   public async encrypt(message,encryptionFor){

    openpgp.initWorker({ path:'assets/openpgp/dist/openpgp.worker.min.js' });
    //console.log('In encrypt');
    

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

  redeemClicked(index){
      this.redeemIndex = index;
      //console.log('displayRedem',this.redeemMessageDisplay);
      this.redeemObjectSet = this.redeemMessageDisplay[this.redeemIndex];
      this.redeemObjectSet.BURN_TOKEN_REQUEST = this.redeemObjectSet.BURN_TOKEN_REQUEST || {};
      this.redeemObjectSet['serialNo']=this.redeemMessageArray[this.redeemIndex]['counter'];
  }

  buyClicked(index){
      this.buyIndex = index;
      this.buyObjectSet = this.buyMessageDisplay[this.buyIndex];
      this.buyObjectSet['serialNo'] = this.buyMessageArray[this.buyIndex]['counter']
      //console.log('BUY OBJECT',this.buyObjectSet);
      
      
      this.buyObjectSet.SEND_TOKEN_REQUEST = this.buyObjectSet.SEND_TOKEN_REQUEST || {};
  }

  public async updateBuyMessage(){
      // //console.log(JSON.stringify(this.buyForm.value));

      //console.log('BUYOBJECT:',this.buyObjectSet);
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
      this.dataService.sendMessage(admin_message,custodian_message,_id).subscribe(
        (data:any) => {
          //console.log(data);
          $('#buy-kyc').modal('hide');
          swal('Updated Details Successfully');
          this.buyIndex = null;
          this.buyObjectSet = {};
          this.getMessage();
        },
        error => {
          //console.log(error);
        },
        () => {
        }
      )    // this.dataService.sendMessage()
  


  }

  public async updateRedeemObject(){
    //console.log('REDEEMOBJECT:',this.redeemObjectSet);
    if(this.redeemObjectSet.BURN_TOKEN_REQUEST){
      if(!this.redeemObjectSet.BURN_TOKEN_REQUEST.tokenSet){
        this.redeemObjectSet.BURN_TOKEN_REQUEST.tokenSet = true;
      }
    }
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
    this.dataService.sendMessage(admin_message,custodian_message,_id).subscribe(
      (data:any) => {
        //console.log(data);
        $('#redeem-kyc').modal('hide');
        swal('Updated Details Successfully');
        this.redeemIndex = null;
        this.redeemObjectSet = {};
        this.getMessage();
      },
      error => {
        //console.log(error);
      },
      () => {
      }
    )
  }

  mintToken(){
    //console.log('In mintToken');
    if(this.buyObjectSet.SEND_TOKEN_ACKNOWLEDGE != true){
      this.buyObjectSet.SEND_TOKEN_ACKNOWLEDGE = true;
      this.contractService.mintToken(this.buyObjectSet.publicKey,parseInt(this.buyObjectSet.SEND_TOKEN_REQUEST.updateBalance));
      this.updateBuyMessage();
    }
  }

  burnTokens(){
    if(this.redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE != true){
      this.redeemObjectSet.BURN_TOKEN_ACKNOWLEDGE = true;
      //console.log('REDEEMOBJECT',this.redeemObjectSet);
      $('#redeem-kyc').modal('hide');
      this.contractService.burnTokenFrom(this.redeemObjectSet.publicKey,parseInt(this.redeemObjectSet.BURN_TOKEN_REQUEST.assetBalance)).then(data => {
        this.updateRedeemObject();
      })
    }
  }

 
}
