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
  private _tokenContractAddress: string = "0x07ee1948ff4dfa7b4b45a1023f9c92e528468eb8";

  constructor(private httpClient : HttpClient) {

    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);
      
      window.ethereum.enable(); 
      // let account = this.getAccount();
      
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

  public async getUserBalance(address?): Promise<number> {
    let account:any;
    if(!address){
      account = await this.getAccount();
    }else{
      account = address;
    }

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
        // console.log(result);
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
        // console.log(result);
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
        // console.log(result);
        resolve(result);
      });
    })as Promise<string>;
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

  public setTransferFees(fees){
    return new Promise((resolve, reject) => {
      this._tokenContract.setTransferFee(fees,(err, result) => {
        if(err != null){
          reject(err);
        }
        // console.log(result);
        resolve(result);
      });
    })as Promise<string>;
    
  }

  public setRedeemFees(fees){
    return new Promise((resolve, reject) => {
      this._tokenContract.setFee(fees,(err, result) => {
        if(err != null){
          reject(err);
        }
        // console.log(result);
        resolve(result);
      });
    })as Promise<string>;
    
  }

  public async setBuyFees(fees){
    return new Promise((resolve, reject) => {
      this._tokenContract.setBuyFee(fees,(err, result) => {
        if(err != null){
          console.log(err);
          
          reject(err);
        }
        console.log(result);
        resolve(result);
      });
    })as Promise<string>;
  }

  getGasPrice(){
    return new Promise((resolve, reject) => {
      this._web3.eth.getGasPrice(function(error, result){
        if(!error){
          console.log("price is:");
          console.log(result);
          resolve(Number(result));
        }
        else{
          console.log(error);
          reject(Number(0));
        } 
      })
    })
  }

  // getEstimateGas(orderId: string, message: string){
  //   return new Promise((resolve, reject) => {
  //      this._tokenContract.setBuyFee.estimateGas(orderId, message,{from: this._web3.eth.accounts[0], value:this._web3.toWei(0.1, "ether")}, function(error, result){
  //        if(!error){
  //          console.log("estimate gas is:");
  //          console.log(result);
  //          resolve(Number(result));
  //        }
  //        else{
  //         console.log(error);
  //         reject(Number(0));
  //       }
  //     })
  //   })
  // }


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


  public async mintToken(address:string, amount:number){
    console.log('Address:',address,'Amount:',amount);

    return new Promise((resolve, reject) => {
      this._tokenContract.mint(address, amount,(err,result)=>{
        if(err != null){
          reject(err);
        }

        resolve(result);
      });

    })as Promise<number>;
    
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

  

  async burnToken(token){

    return new Promise((resolve, reject) => {
      this._tokenContract.redeem(token,(err,result)=>{
        if(err != null){
          reject(err);
        }

        resolve(result);
      });

    })as Promise<number>;
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

  public async burnTokenFrom(address:string,token){
   console.log('address:',address,'token:',token);

   return new Promise((resolve, reject) => {
    this._tokenContract.burnFrom(address,token,(err,result)=>{
      if(err != null){
        reject(err);
      }

      resolve(result);
    });

  })as Promise<number>;
  }
  

}
