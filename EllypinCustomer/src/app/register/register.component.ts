import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isProcessing = false;
  constructor(
    private dataService : DataService
  ) {}

  ngOnInit() {
  }

  onRegister(formData){
    this.isProcessing = true;
    let payload = {
      "email":formData.value.email,
      "password":formData.value.password,
      "address":formData.value.address,
      "category":formData.value.category,
      "ellypinid":formData.value.ellypinID,
      "familyname":formData.value.lName,
      "firstname":formData.value.fName,
      "idproof":formData.value.idProof,
      "kyc":formData.value.kyc,
      "nationality":formData.value.nationality,
      "salutation":formData.value.salutation,
      "sociallink":formData.value.social,
      "telephone":formData.value.telephone,
      "walletaddr":formData.value.walletAddress
      }
    this.dataService.registerUser(payload).subscribe((successRes)=>{
      if(successRes == "User Already Exist"){
        this.isProcessing = false;
        Swal.fire({
          title: successRes,
          icon: 'info',
          confirmButtonText: 'OK'
        })
      }
      else{
        Swal.fire({
          title: successRes,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(()=>{
          this.isProcessing = false;
          formData.reset();
        })
      }
    },(error)=>{
      console.log('no submitted', error);
      this.isProcessing = false;
    })
  }

}
