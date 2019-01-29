import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
declare var window:any;
declare const InstallTrigger: any;


@Component({
  selector: 'app-pod',
  templateUrl: './pod.component.html',
  styleUrls: ['./pod.component.css']
})
export class PodComponent implements OnInit {

  public podArray=[];

  constructor(public dataService:DataService) { }

  ngOnInit() {

    this.dataService.getCustomerData().subscribe(
      (data:any) => {
        this.podArray = data.podList;        
      },
      error => {
        console.log(error);
      }
    )

  }

  getMetamask(){

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
console.log('Firefox:',isFirefox);
console.log('Chrome:',isChrome);
    if(isChrome){
      window.open(`https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en`, "_blank");
    }
    if(isFirefox){
      window.open(`https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/`, "_blank");
    }

  }

}
