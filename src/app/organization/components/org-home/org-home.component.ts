import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{OrgServiceService} from './../../services/org-service.service'

@Component({
  selector: 'app-org-home',
  templateUrl: './org-home.component.html',
  styleUrls: ['./org-home.component.css']
})
export class OrgHomeComponent implements OnInit {


  trainers:any
  username:string
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private orgservice:OrgServiceService) { }

  ngOnInit(): void {
    var username=this.activatedRoute.snapshot.paramMap.get('username')
    this.username=username
    console.log('the user name is in home'+this.username)
    this.orgservice.getAllTrainers().subscribe(result=>{
      this.trainers=result
      console.log(result)

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
  navigateToTraiProfile(trausername:string)
  {
    this.router.navigate(['orgtra/'+trausername+'/'+this.username])
  }


}



