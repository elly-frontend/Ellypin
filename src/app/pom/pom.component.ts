import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
declare var window:any;
declare const InstallTrigger: any;

@Component({
  selector: 'app-pom',
  templateUrl: './pom.component.html',
  styleUrls: ['./pom.component.css']
})
export class PomComponent implements OnInit {

  public pomArray=[];

  constructor(public dataService:DataService) { }

  ngOnInit() {

    this.dataService.getCustomerData().subscribe(
      (data:any) => {
        this.pomArray = data.pomList;
      },
      error => {
        console.log(error);
      }
    )

  }

  getMetamask(){
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
