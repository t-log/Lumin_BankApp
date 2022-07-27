import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    uname:[''],
    acno:[''],
    pswd:['']
  })

  

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register()
  {
    // alert("register clicked")

    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    
    const result=this.ds.register(acno,uname,pswd)

    if(result)
    {
      alert('Successfully registered!!!')
      this.router.navigateByUrl('')
    }
    else
    {
      alert('User already exist...Please login')
      this.router.navigateByUrl('')
    }

  }

}
