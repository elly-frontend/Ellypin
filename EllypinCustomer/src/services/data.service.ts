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

  public sendMessagePod2(admin_payload:any, custodian_payload:any, _id?:any){
    let Data:any;
    if(_id){
      Data = {
        _id:_id,
        custodian2Message: custodian_payload,
        adminMessage: admin_payload
      }
    }else{
      Data = {
        custodian2Message: custodian_payload,
        adminMessage: admin_payload
      }
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/pod2Api',Data)
  }

  public redeemToken(admin_payload, custodian_payload){
    let Data = {
      custodianMessage: custodian_payload,
      adminMessage: admin_payload
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage',Data)
  }

  public redeemTokenPod2(admin_payload, custodian_payload){
    let Data = {
      custodian2Message: custodian_payload,
      adminMessage: admin_payload
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/pod2Api',Data)
  }

  public swapToken(admin_payload, custodian1_payload, custodian2_payload, _id?:any){
    let Data : any;
    if(_id){
      Data = {
        _id : _id,
        custodianMessage: custodian1_payload,
        custodian2Message: custodian2_payload,
        adminMessage: admin_payload
      }
    }else{
      Data = {
        custodianMessage: custodian1_payload,
        custodian2Message: custodian2_payload,
        adminMessage: admin_payload
      }
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessageNew',Data)
  }

  public getSwapMessages(role){
    return this.httpClient.get(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/getmessage_two?role=${role}`);
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

  /* registration API */
  registerUser(data){
    return this.httpClient.post<any>('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/adduser' , data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /* Login API */
  loginUser(data){
    return this.httpClient.post<any>('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/loginUser' , data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

}
