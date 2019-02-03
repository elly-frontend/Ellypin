import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class DataService {;

  constructor(private httpClient : HttpClient) {

  }

  testHook(){
    return this.httpClient.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/webhook0')
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
