import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService} from '../authService/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  collInfo = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private auth:AuthService) { }
  getD={}
  ngOnInit(): void {
    this.auth.getdata().subscribe((data)=>{
      console.log(data)
      this.getD=data
    });
  }
  collactInfo(){
    console.log(this.getD)
  }
}
