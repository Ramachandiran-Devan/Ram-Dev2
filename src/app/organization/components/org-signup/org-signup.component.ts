import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrgServiceService } from '../../services/org-service.service';

@Component({
  selector: 'app-org-signup',
  templateUrl: './org-signup.component.html',
  styleUrls: ['./org-signup.component.css']
})
export class OrgSignupComponent implements OnInit {

  orgSignUpForm:FormGroup
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  mobilePattern="[0-9]{10}"
  landLinePattern="[0-9]{8}"
  constructor(private router:Router,private orgService:OrgServiceService,private formbuilder:FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.orgSignUpForm=this.formbuilder.group(
      {
      organizationName:new FormControl('',Validators.required),
      address:new FormControl(),
      landLineNumber:new FormControl('',[Validators.required,Validators.pattern(this.landLinePattern)]),
      website:new FormControl('',Validators.required),
      contactPersonName:new FormControl('',Validators.required),
    	contactPersonDesignation:new FormControl('',Validators.required),
      contactPersonEmailId:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
      contactPersonMobileNumber:new FormControl('',[Validators.required,Validators.pattern(this.mobilePattern)]),
      organizationProfile:new FormControl('',Validators.required),
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
      }
    )

    
  }
  saveOrgSignUp()
  {
    if(this.orgSignUpForm.invalid)
    {
      this.orgSignUpForm.markAllAsTouched()
      this.toastr.warning('Please Provide Required Fields with valid mobilenumber and mail id ')
      if(this.orgSignUpForm.get('landLineNumber').errors.pattern)
      {
       this.toastr.info('Enter valid land line number')
      }
      else if(this.orgSignUpForm.get('contactPersonEmailId').errors.pattern)
      {
        this.toastr.info('Enter valid email id')
      }
      else if(this.orgSignUpForm.get('contactPersonMobileNumber').errors.pattern)
      {
        this.toastr.info('Enter valid Mobile number id')
      }


    }
    else
    {
      this.orgService.checkUserNameAndOrgName(this.orgSignUpForm.value.organizationName,this.orgSignUpForm.value.username).subscribe(result=>
         {
          console.log('the result is '+result)
          if(result.message=='user-org taken')
          {
            this.toastr.warning('organization and username is already taken')
          }
          else if(result.message=='user-taken')
          {
            this.toastr.warning('user name is already taken please provide different username')
          }
          else if(result.message=='org-taken')
          {
            this.toastr.warning('organization name is already taken please provide with branch name')
          }
          else if(result.message=='valid')
          {
           console.log(this.orgSignUpForm.value)
           this.orgService.saveOrganization(this.orgSignUpForm).subscribe(result=>{
           console.log(result)
           this.orgSignUpForm.reset()
           this.toastr.success("your data saved successfully")
           this.router.navigate(['orglogin'])
          })
         }
        })
    }

  }
      
}

/*
  organizationName
  address
  landLineNumber
  website
  contactPersonName
	contactPersonDesignation
  contactPersonEmailId
  contactPersonMobileNumber
  organizationProfile
  username
  password
*/