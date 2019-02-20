import { Component, OnInit, HostListener } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import {Message, Message_Type} from '../sharedData/message.interface';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import adminPublicKey from '../sharedData/adminPublicKey';
import adminPrivateKey from '../sharedData/adminPrivateKey';
import custodianPrivateKey from '../sharedData/custodianPrivateKey';
import custodianPublicKey from '../sharedData/custodianPublic';
import swal from 'sweetalert2';
declare var $:any;
import * as openpgp from 'openpgp';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public buyForm:FormGroup;
  public buyToken:AbstractControl;
  public buyFee:AbstractControl;
  public buyAmount:any;
  public buyFirstName:AbstractControl;
  public buyLastName:AbstractControl;
  public buyMiddleName:AbstractControl;
  public buyAddress:AbstractControl;
  public buyCity:AbstractControl;
  public buyProvince:AbstractControl;
  public buyCountry:AbstractControl;
  public buyEmail:AbstractControl;
  public buyTel:AbstractControl;
  public buyPostCode:AbstractControl;
  public buyBank:AbstractControl;
  public buyParty:AbstractControl;
  public redeemForm:FormGroup;
  public redeemToken:AbstractControl;
  public redeemFee:AbstractControl;
  public redeemTotal:any;
  public redeemBank:AbstractControl;
  public redeemAccountNumber:AbstractControl;
  public redeemSwiftCode:AbstractControl;
  public redeemBeneficiary:AbstractControl;
  public redeemEmail:AbstractControl;
  public transferForm:FormGroup;
  public transferToken:AbstractControl;
  public transferAddr:AbstractControl;
  public ethereumAccount:any;
  public intervalId:any;
  public fees:any;
  public buyFeePercent:any;
  public userBalance:any;
  public loading:boolean=false;
  public custData = {};
  public contractDetails={};
  public assetBalance:any;
  public buyFees:any;
  public transferFees:any;
  public totalSupply:any;
  public totalBurn:any;
  public totalRedeem:any;
  public netToken:any;

  constructor( public contractService:ContractService,public dataService:DataService, public fb:FormBuilder ) {
    this.buyForm = fb.group({
      'buyToken':['', Validators.compose([Validators.required, Validators.pattern(/^[1-9][0-9]*$/)])],
      'buyFee':['', Validators.compose([Validators.required])],
      'buyFirstName':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyMiddleName':['', Validators.compose([Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyLastName':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyAddress':['', Validators.compose([Validators.required])],
      'buyCity':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyProvince':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyCountry':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
      'buyEmail':['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'buyTel':['', Validators.compose([Validators.required])],
      // 'buyBank':['', Validators.compose([Validators.required])],
      'buyPostCode':['', Validators.compose([Validators.required,Validators.maxLength(6), Validators.pattern('[0-9]*$')])],
      // 'buyParty':['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z ]{1,40}$/)])],
    }) 

    this.redeemForm = fb.group({
      'redeemToken':['', Validators.compose([Validators.required,Validators.maxLength(10), Validators.pattern(/^[1-9][0-9]*$/)])],
      'redeemFee':['', Validators.compose([Validators.required])],
      'redeemEmail':['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      'redeemBank':['', Validators.compose([Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-Z0-9, ]*$')])],
      'redeemSwiftCode':['', Validators.compose([Validators.required,Validators.maxLength(6), Validators.pattern(/^[0-9]*$/)])],
      'redeemAccountNumber':['', Validators.compose([Validators.required, Validators.pattern('[0-9]*$')])],
      'redeemBeneficiary':['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9, ]*$')])]
    })

    this.transferForm = fb.group({
      'transferToken':['', Validators.compose([Validators.required,Validators.maxLength(10), Validators.pattern(/^[1-9][0-9]*$/)])],
      'transferAddr':['',Validators.compose([Validators.required, Validators.maxLength(60)])]
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

  public async getContractData(){
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

    this.contractDetails['contractAddress'] = "0xd9cdabaa9b94e52ac8f20875b2f614e1a2cbb654";
  }

  getBalance(){
    this.contractService.getUserBalance().then((balance:any) => {
      this.userBalance = balance.c[0];
      // console.log('UserBalance:',this.userBalance);
      
      });
  }

  getFees(){
    this.dataService.getAllFees().subscribe(
      (data:any) => {
        // console.log('Fees',data.buyFee);
        this.buyFeePercent = data.buyFee;
      },
      error => {
        console.log(error);
      }
    )
  }

  public getAllFees(){
    this.contractService.getAllFees().then(
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

  openPopup(popupId){
    // console.log('POPID:',popupId);
    
    if(this.ethereumAccount){
      $(`#${popupId}`).modal('show');
    }else{
      swal('Login to Metamask & connect to our application');
    }
  }

  public async getAccounts(){
    this.contractService.getAccount().then(async accounts => {
      this.ethereumAccount=accounts;
      if(this.ethereumAccount != null){
        await this.getBalance();
        this.getContractData();
        this.getCustomerData();
        this.getBalance();
        this.getAllFees();
        this.getFees();
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

  keyBuy(event){
    this.buyForm.controls['buyFee'].patchValue(this.buyFees);
    this.buyAmount = parseInt(this.buyForm.value.buyToken) + parseInt(this.buyForm.value.buyFee);
    if(isNaN(this.buyAmount)){
      this.buyAmount = "";
    } 
  }

  keyRedeem(event){
    this.redeemForm.controls['redeemFee'].patchValue(this.fees);
    this.redeemTotal = parseInt(this.redeemForm.value.redeemToken) - parseInt(this.redeemForm.value.redeemFee);
    if(isNaN(this.redeemTotal)){
      this.redeemTotal = "";
    } 
  }

  closeModal(){
    this.redeemForm.reset();
    this.redeemTotal = '';
    this.buyForm.reset();
    this.buyAmount='';
  }

  burnToken(redeemAmount:number,id){
    this.contractService.burnToken(redeemAmount).then(() =>{
      swal({
        html:'Request Created Successfully </br> Request Id: '+ id
      });
    });
  }

  public async buyRequest(){
    if(this.buyForm.valid){
      // console.log(JSON.stringify(this.buyForm.value));
      let sender =await this.contractService.getAccount().then(accounts => {
        // console.log(accounts);
        return accounts;
      });
      let messageToSend:Message = {} as any;
      // messageToSend.parentMessage = null;
      messageToSend.type = Message_Type.BUY;
      messageToSend.time = new Date().getTime();
      messageToSend.email = this.buyForm.value.buyEmail;
      messageToSend.publicKey = sender;

      let message_object = Object.assign({}, this.buyForm.value);
      message_object.publicKey = sender;
      message_object.type = Message_Type.BUY;
      message_object.KYC="Not Approved";
      message_object[Message_Type.SEND_TOKEN_REQUEST] = null;
      message_object[Message_Type.SEND_TOKEN_ACKNOWLEDGE] = null;


      delete message_object['email'];   

      let admin_message = Object.assign({}, messageToSend);
      let custodian_message = Object.assign({}, messageToSend);
      admin_message.message=await this.encrypt(JSON.stringify(message_object),'admin');
      custodian_message.message=await this.encrypt(JSON.stringify(message_object),'custodian');
// console.log('ADmin:',admin_message,'Custodian:',custodian_message);

      this.loading = true;
      let a= 5;
      this.dataService.sendMessage(admin_message,custodian_message).subscribe(
        (data:any) => {
          // console.log(data);
          this.buyAmount = "";
          swal({
            html:'Request Created Succesfully</br>Request Id:'+data
          });
          this.buyForm.reset();
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

  public async redeemRequest(){
    if(this.redeemForm.valid){
      console.log(JSON.stringify(this.redeemForm.value));
      console.log('UserBalance:',this.userBalance);
      
      if(parseInt(this.redeemForm.value.redeemToken)+parseInt(this.fees) > parseInt(this.userBalance)){
        swal('Insufficient no. of tokens',);
        console.log(parseInt(this.redeemForm.value.redeemToken)+this.fees);
        
      }
      else{
        let sender =await this.contractService.getAccount().then(accounts => {
          // console.log(accounts);
          return accounts;
        });
        let messageToSend:Message = {} as any;
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
        message_object[Message_Type.BURN_TOKEN_REQUEST] = null;
        message_object[Message_Type.BURN_TOKEN_ACKNOWLEDGE] = null;
        let admin_message = Object.assign({}, messageToSend);
      let custodian_message = Object.assign({}, messageToSend);
      admin_message.message=[];
      admin_message.message.push(await this.encrypt(JSON.stringify(message_object),'admin'));
      custodian_message.message=[];
      custodian_message.message.push(await this.encrypt(JSON.stringify(message_object),'custodian'));
  
        this.loading = true;
        this.dataService.redeemToken(admin_message,custodian_message).subscribe(
          (data:any) => {
            // console.log(data);
            this.redeemTotal = "";
            this.burnToken(this.redeemForm.value.redeemToken,data)
            this.redeemForm.reset();
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

  toMyetherScan(){
    if(this.ethereumAccount){
      window.open(`https://ropsten.etherscan.io/address/${this.ethereumAccount}#tokentxns`, "_blank");
    }
  }

  transferTokens(){
    if(this.transferForm.valid){
      // console.log('form is valid');
      
      this.contractService.sendContractToken(this.transferForm.value.transferAddr, parseInt(this.transferForm.value.transferToken))
    }
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

}
