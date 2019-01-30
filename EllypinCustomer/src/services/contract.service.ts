import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { StitchClientFactory } from 'mongodb-stitch';

import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi = require('../tokenContract.json');

@Injectable()
export class ContractService {
  // clientPromise = StitchClientFactory.create('ifakebook-eqvwi');
  // client;
  // db;

  private _account: string = null;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0x24f5c1b5159c9f643d09358f08fd5b4447a2797e";

  constructor(private httpClient : HttpClient) {
  //   this.clientPromise.then(_client => {
  //     this.client = _client;
  //     this.db = this.client.service('mongodb', 'mongodb-atlas').db('ifakebook_db');
  // });

    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);
      
      window.ethereum.enable(); 
      this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
      // if (this._web3.version.network !== '4') {
      //   alert('Please connect to the Rinkeby network');
      // }
    } else {
      alert(
        'Please install MetaMask extension for your browser'
      );
    }
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

  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();

    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.balanceOf.call(account,  (err, result) => {
        if(err != null) {
          reject(err);
        }
        // console.log(result);
        
        resolve(result);
      });
    }) as Promise<number>;
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
  

}
