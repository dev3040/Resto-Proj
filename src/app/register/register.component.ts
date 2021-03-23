import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService} from '../authService/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  collReg = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }
  collactRecords(){
    this.auth.saveUser(this.collReg.value).subscribe((data)=>{
      console.log(data+"Registered")
    },
    error=>console.log(error))
    console.log(this.collReg.value)
  }
}
