import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public custData = {};
  public contractDetails={};

  constructor( public dataService:DataService ) { }

  ngOnInit() {
    this.getCustomerData();
    this.getContractData();
  }

  public async getCustomerData(){
    await this.dataService.getCustomerData().subscribe(
      (data:any) => {
        console.log('Data:',data);
        this.custData = data.custData;
      },
      error => {
        console.log(error);
      }
    )
  }

  public async getContractData(){
    await this.dataService.getName().then(
      name => {
        console.log(name);
        this.contractDetails['contractName'] = name;
      }
    )

    await this.dataService.getSymbol().then(
      symbol => {
        this.contractDetails['symbol'] = symbol;
      }
    )

    await this.dataService.getDecimal().then(
      symbol => {
        this.contractDetails['decimal'] = symbol;
      }
    )

    this.contractDetails['contractAddress'] = "0x24f5c1b5159c9f643d09358f08fd5b4447a2797e"
  }

}
