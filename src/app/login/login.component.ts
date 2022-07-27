import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property / variable

  aim ='Your Perfect banking partner';

  account='Enter your account here';

  acno='';

  pswd='';

  //constructor -

  constructor(private router:Router,private ds:DataService) { }

  //ngOnInint - Life cycle hook of angular
  ngOnInit(): void {

  }

  //user defined functions

  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
  }

  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }

  //login
  login()
  {
    var acno=this.acno;
    var pswd=this.pswd;

    const result=this.ds.login(acno,pswd)
    if(result)
    {
      alert('Login Successfull')
      this.router.navigateByUrl('dashboard')
    }
  }

 }
