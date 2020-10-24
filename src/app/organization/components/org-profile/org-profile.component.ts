import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrgServiceService} from './../../services/org-service.service'

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['./org-profile.component.css']
})
export class OrgProfileComponent implements OnInit {

  username:string
  organizationProfile:any
  organizationIcon:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private http:HttpClient,private orgservice:OrgServiceService) { }

  ngOnInit(): void {
    var username=this.activatedRoute.snapshot.paramMap.get('username')
    this.username=username
    console.log('profile user name is '+this.username)
    this.orgservice.getOrganizationByUserName(this.username).subscribe(result=>{
      console.log(result)
      this.organizationProfile=result
      console.log('the user name of result is '+this.organizationProfile.username)
      this.organizationIcon=this.organizationProfile.organizationName.charAt(0).toUpperCase()

    })

  }
  navigateToHome()
  {
    this.router.navigate(['orghome/'+this.username])
  }
  navigateToLogout()
  {
    this.router.navigate(['orglogout'])
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
