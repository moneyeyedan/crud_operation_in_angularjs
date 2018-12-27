import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../httpservice.service';
@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  Regsiter_Admin=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(private http_service:HttpserviceService) { }

  ngOnInit() {
  }
  admin_signup(){
    console.log(this.Regsiter_Admin.value)
    this.http_service.httPost(this.Regsiter_Admin.value,"http://192.168.0.127:1337/admin/signup").subscribe(res=>{
      console.log(res);
    })
  }

}
