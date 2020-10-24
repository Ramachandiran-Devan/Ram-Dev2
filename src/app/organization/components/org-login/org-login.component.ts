import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import{OrgServiceService} from './.././../services/org-service.service'

@Component({
  selector: 'app-org-login',
  templateUrl: './org-login.component.html',
  styleUrls: ['./org-login.component.css']
})
export class OrgLoginComponent implements OnInit {
  OrgCredentials:FormGroup
  isLoad=false
  constructor(private orgservice:OrgServiceService,private router:Router,private toastr:ToastrService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.OrgCredentials=this.formbuilder.group(
      {
        username:new FormControl(),
        password:new FormControl()
      }
    )
  }

  orgLogIn()
  {
    this.isLoad=true
    //let credentials='Basic '+btoa(this.OrgCredentials.value.username+':'+this.OrgCredentials.value.password)
    this.orgservice.orglogIn(this.OrgCredentials).subscribe(result=>
      {
        this.toastr.success('Login success')
        this.isLoad=false
        let username=this.OrgCredentials.value.username
        this.router.navigate(['orghome'+'/'+username])
        this.OrgCredentials.reset()
      },
      error=>
      {
        this.toastr.error('wrong credentials')
        this.isLoad=false
      }
      )
  }
  orgSignUp()
  {
    this.router.navigate(['orgsignup'])
  }
  trainerSign()
  {
    this.router.navigate(['login'])
  }

}
