import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class DataService {;

  constructor(private httpClient : HttpClient) {

  }

  testHook(){
    return this.httpClient.get('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/webhook0')
  }

  public sendMessage(admin_payload, custodian_payload){
    let Data = {
      custodian: custodian_payload,
      admin: admin_payload
    }
    return this.httpClient.post('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ellypin-wysik/service/http/incoming_webhook/sendMessage',Data)
  }

  public redeemToken(admin_payload, custodian_payload){
    let Data = {
      custodian: custodian_payload,
      admin: admin_payload
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

}
