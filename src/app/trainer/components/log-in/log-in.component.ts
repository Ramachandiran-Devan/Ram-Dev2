import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {TrainerService} from './.././../services/trainer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm:FormGroup
  isLoad=false
  constructor(private formbuilder:FormBuilder,private trainerservice:TrainerService,private router:Router,private tostr:ToastrService) { }

  ngOnInit(): void {

    this.loginForm=this.formbuilder.group(
      {
        username:new FormControl(),
        password:new FormControl()
      }
    )
  }
  logInTrainer()
  {
    this.isLoad=true
    console.log(this.loginForm.value)
    let credentials='Basic '+btoa(this.loginForm.value.username+':'+this.loginForm.value.password)
    this.trainerservice.trainerLogin(credentials).subscribe(result=>
      {
        var username=this.loginForm.value.username
        console.log(result)
        this.loginForm.reset();
        this.isLoad=false
        this.tostr.success("LogIn success")
        sessionStorage.setItem('head',credentials)
        console.log('user name is '+username)
        this.router.navigate(['home/'+username])
      },
      error=>
      {
        console.log('oops error')
        this.isLoad=false
        this.tostr.error("Wrong credentials")
      }
      )
      
  }
  signUp()
  {
    console.log('sign up is working')
    this.router.navigate(['signup'])
  }
  organizationSign()
  {
    console.log('organization login')
    this.router.navigate(['orglogin'])
  }

}
