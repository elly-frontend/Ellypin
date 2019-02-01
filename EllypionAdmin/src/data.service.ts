import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi = require('./tokenContractAbi.json');


@Injectable()
export class DataService {

  private _web3: any;
  private _tokenContract: any;
  private _tokenContractAddress: string = "0x24f5c1b5159c9f643d09358f08fd5b4447a2797e";


  constructor(private httpClient : HttpClient) {
    this._web3 = new Web3(window.web3.currentProvider || `https://ropsten.infura.io/v3/d251bbea9b4e47ebb10ea863b6d8fdd3`);
      
      this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }

  public async getName(): Promise<string>{
    return new Promise((resolve, reject) => {
      this._tokenContract.name.call((err, result) => {
        if(err != null){
          reject(err);
        }
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

  public async getFees(): Promise<number>{
    return new Promise((resolve, reject) => {
      this._tokenContract.getFee.call((err, result) => {
        if(err != null){
          reject(err);
        }
        console.log(result);
        resolve(result);
      });
    })as Promise<number>;
  }

  testHook(){
    return this.httpClient.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/webhook0')
  }

  public sendMessage(admin_payload, custodian_payload,_id){
    let Data = {
        _id:_id,
      custodianMessage: custodian_payload,
      adminMessage: admin_payload
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage',Data)
  }

  public redeemToken(admin_payload, custodian_payload,_id){
    let Data = {
    _id:_id,
      custodian: custodian_payload,
      admin: admin_payload
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage',Data)
  }

  public getMessages(role){ 
    return this.httpClient.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/getMessage?role=${role}`)
  }

  public getCustomerData(){
    return this.httpClient.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/ellypinData`)
  }

  public getAllFees(){
    return this.httpClient.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/metadata`)
  }

  public login(payload){
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/login',payload)
  }

  public saveFees(payload){
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/post_metadata',payload)
  }

}
