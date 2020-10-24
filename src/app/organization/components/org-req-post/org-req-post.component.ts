import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {OrgServiceService} from './.././../services/org-service.service';

@Component({
  selector: 'app-org-req-post',
  templateUrl: './org-req-post.component.html',
  styleUrls: ['./org-req-post.component.css']
})
export class OrgReqPostComponent implements OnInit {
  username:string
  organization:any
  organizationName:string
  postReq:FormGroup
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private orgservice:OrgServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    var username=this.activatedRoute.snapshot.paramMap.get('username')
    this.username=username
    console.log('post req user name is '+this.username)
    this.orgservice.getOrganizationByUserName(this.username).subscribe(result=>{
      console.log('the result is '+result)
      this.organization=result
      console.log(this.organization.organizationName)
      this.organizationName=this.organization.organizationName;
      console.log('the organizationName is '+this.organizationName)
    });
    this.postReq=this.formBuilder.group({
    organizationName:new FormControl(),
    startDate:new FormControl(),
    duration:new FormControl(),
    skillsDesc:new FormControl()
    })
    
   /*
   private String organizationName;
	private Date startDate;
	private Integer duration;
	private String skillsDesc;
   */
  }
  navigateToHome()
  {
    this.router.navigate(['orghome/'+this.username])
  }
  navigateToLogout()
  {
    this.router.navigate(['orglogout'])
  }
  savePost()
  {
    this.postReq.value.organizationName=this.organizationName
    this.orgservice.savePostRequirment(this.postReq).subscribe(result=>
      {
        console.log(result)
      })
    this.postReq.reset()
  }
  navigateToPostReq(){
    this.router.navigate(['orgpostreq/'+this.username])
 }
  navigateToProfile()
  {
    console.log('navigate to profile')
    this.router.navigate(['orgprofile/'+this.username])
  }

}
