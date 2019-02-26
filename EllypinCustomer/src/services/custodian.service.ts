import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { StitchClientFactory } from 'mongodb-stitch';

import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi = require('../tokenContract.json');

@Injectable()
export class CustodianService {
  // clientPromise = StitchClientFactory.create('ifakebook-eqvwi');
  // client;
  // db;

  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0x07ee1948ff4dfa7b4b45a1023f9c92e528468eb8";

  constructor(private httpClient : HttpClient) {
  //   this.clientPromise.then(_client => {
  //     this.client = _client;
  //     this.db = this.client.service('mongodb', 'mongodb-atlas').db('ifakebook_db');
  // });

      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider || `https://ropsten.infura.io/v3/d251bbea9b4e47ebb10ea863b6d8fdd3`);
      
    //   window.ethereum.enable(); 
      this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
      // if (this._web3.version.network !== '4') {
      //   alert('Please connect to the Rinkeby network');
      // }
    
  }

  setHeader():Object {
    // console.log(localStorage.getItem('accessToken'), "inside set header if");
    if(localStorage.getItem('accessToken')) {
      
      let headers = new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Authorization':'Bearer '+localStorage.getItem('accessToken')
      });
      return {headers};
    } else {
      // console.log("inside set header else");

      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return {headers};

    }
     
  }

  public async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }

          if (accs.length === 0) {
            // alert(
            //   'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            // );
            resolve(null)
            // return null;
          }
          // console.log(accs[0]);
          
          resolve(accs[0]);
        })
      }) as string;

      this._web3.eth.defaultAccount = this._account;
    }

    return Promise.resolve(this._account);
  }

  public async getUserBalance(address:string): Promise<number> {
    // let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.balanceOf.call(address,  (err, result) => {
        if(err != null) {
          reject(err);
        }
        // console.log(result);
        
        resolve(result);
      });
    }) as Promise<number>;
  }

  public async getTotalSupply(): Promise<string>{
    return new Promise((resolve, reject) => {
      this._tokenContract.totalSupply.call((err, result) => {
        if(err != null){
          reject(err);
        }
        // console.log(result);
        resolve(result);
      });
    })as Promise<string>;
  }

  public async getTotalBurn(): Promise<string>{
    return new Promise((resolve, reject) => {
      this._tokenContract.totalBurn.call((err, result) => {
        if(err != null){
          reject(err);
        }
        // console.log(result);
        resolve(result);
      });
    })as Promise<string>;
  }

  public async getName(): Promise<string>{
    return new Promise((resolve, reject) => {
      this._tokenContract.name.call((err, result) => {
        if(err != null){
          reject(err);
        }
        console.log(result);
        resolve(result);
      });
    })as Promise<string>;
  }

  public async getSymbol(): Promise<string>{
    return new Promise((resolve, reject) => {
      this._tokenContract.symbol.call((err, result) => {
        if(err != null){
          reject(err);
        }
        console.log(result);
        resolve(result);
      });
    })as Promise<string>;
  }

  public async getDecimal(): Promise<string>{
    return new Promise((resolve, reject) => {
      this._tokenContract.decimals.call((err, result) => {
        if(err != null){
          reject(err);
        }
        console.log(result);
        resolve(result);
      });
    })as Promise<string>;
  }


  public async transfer(address,token): Promise<any> {
    let account = await this.getAccount();

    const transactionParameters = {
      from:account,  
      to: '0x2784a70ae2f84f40007f5d6518e20adff5c82d98', 
      value: token.toString(), 
      // data: this._tokenContract.transfer(address, token).getData(function(error,result){
      //   console.log(error);
      //   console.log(result);
        
      // }), 
    }

    console.log('TransactionParameter:', transactionParameters);
    

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      window.ethereum.sendAsync({
        method:'eth_sendTransaction',
        params: [transactionParameters],
        from:account
      }, (err,result) => {
        if(err != null){
          reject(err)
        }
        console.log(result);
        
      }
    );
      // this._tokenContract.transfer.call(address, token,{from:account, gas:1234},  (err, result) => {
      //   if(err != null) {
      //     reject(err);
      //   }
      //   console.log(result);
        
      //   resolve(result);
      // });
    }) as Promise<any>;
  }

  public async sendEther(address,token){
    let account = await this.getAccount();
    let payload = {from:account,to:address, value:this._web3.toWei(token,"ether")}
    console.log('Payload:', payload);
    
    var send = this._web3.eth.sendTransaction(payload,(err, result) => {
      if(err != null){
        console.log(err);
        
      }
      else{
        console.log(result);
        
      }
    });
  }

  public async mintToken(address:string, amount:number){
    console.log('Address:',address,'Amount:',amount);
    
    this._tokenContract.mint( address, amount,(err,result) => {
      if(err != null){
        console.log(err);
      }
      else{
        console.log(result);
      }
    }

    )
  }

  public async sendContractToken(address,token){
    let account = await this.getAccount();
    let payload = {to:address, value:token}
    console.log('Payload:', payload);
    
    var send = this._tokenContract.transfer( address,token,(err, result) => {
      if(err != null){
        console.log(err);
        
      }
      else{
        console.log(result);
        
      }
    });
  }

  burnToken(token){
    this._tokenContract.redeem(token,(err,result) => {
      if(err != null){
        console.log(err);
      }
      else{
        console.log(result);
      }
    }
    )
  }

  public async getRedeemBalance(){
    let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      this._tokenContract.getRedeemBalance(account,(err,result)=>{
        if(err != null){
          reject(err);
        }

        resolve(result);
      });

    })as Promise<number>;
  }

  public async getFees(): Promise<number>{
    return new Promise((resolve, reject) => {
      this._tokenContract.getFee.call((err, result) => {
        if(err != null){
          reject(err);
        }
        // console.log(result);
        resolve(result);
      });
    })as Promise<number>;
  }

  public getAllFees(){
    return new Promise( (resolve, reject) => {
      let fee:any = {}
      this._tokenContract.getTransferFee.call((err, f1) => {
        if(err != null){
          reject(err);
        }
        // console.log(result);
        this._tokenContract.getFee.call((err, f2) => {
          if(err != null){
            reject(err);
          }
          this._tokenContract.getBuyFee.call((err, f3) => {
            if(err != null){
              reject(err);
            }
            resolve({transfer: f1, redeem: f2, buy: f3})
          });
        });
      });
    })as Promise<any>;
  }

  public sendMessage(admin_payload:any, custodian_payload:any, _id?:any){
    let Data:any;
    if(_id){
      Data = {
        _id:_id,
        custodianMessage: custodian_payload,
        adminMessage: admin_payload
      }  
    }else{
      Data = {
        custodianMessage: custodian_payload,
        adminMessage: admin_payload
      }
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage',Data)
  }

  public redeemToken(admin_payload, custodian_payload){
    let Data = {
      custodianMessage: custodian_payload,
      adminMessage: admin_payload
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage',Data)
  }

  public getMessages(role){ 
    return this.httpClient.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/getMessage?role=${role}&messageType=receive`)
  }

  public getCustomerData(){
    return this.httpClient.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/ellypinData`)
  }

  

  public login(payload){
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/login',payload)
  }

  public saveFees(payload){
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/post_metadata',payload)
  }

  

}
