import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isProcessing = false;
  constructor(
    private dataService : DataService,
    private router : Router
  ) {}

  ngOnInit() {
  }

  onLogin(formData){
  this.isProcessing = true;
  let payload = {
    "email": formData.value.email,
    "password": formData.value.password
  }
  this.dataService.loginUser(payload).subscribe((successRes)=>{
    this.isProcessing = false;
    if(successRes == "User Not Exist"){
      Swal.fire({
        title: successRes,
        icon: 'error',
        confirmButtonText: 'Register Now!'
      }).then(()=>{
        this.router.navigate(['/register']);
      })
    }
    else if(successRes == "Please check your credentials"){
      Swal.fire({
        title: successRes,
        icon: 'error'
      })
    }
    else if(successRes == "User login Successfull"){
      this.router.navigate(['/home']);
      Swal.fire({
        title: successRes,
        icon: 'success',
      })
    }
  },(error)=>{
    console.log('no submitted', error);
    this.isProcessing = false;
  })
  }

}
