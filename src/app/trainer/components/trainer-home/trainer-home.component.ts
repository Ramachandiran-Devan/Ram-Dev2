import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TrainerService} from './../../services/trainer.service'
@Component({
  selector: 'app-trainer-home',
  templateUrl: './trainer-home.component.html',
  styleUrls: ['./trainer-home.component.css']
})
export class TrainerHomeComponent implements OnInit {

  username:string
  organizationsPosts:any
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private trainerservice:TrainerService) { }

  ngOnInit(): void {
    var username=this.activatedRoute.snapshot.paramMap.get('username')
    this.username=username
    console.log('from  home user name is '+this.username)
    this.trainerservice.getAllPosts().subscribe(result=>{
      console.log(result)
      this.organizationsPosts=result
    })

  }
  navigateToHome()
  {
    this.router.navigate(['home/'+this.username])
  }
  navigateToLogout()
  {
    this.router.navigate(['logout'])
  }
  navigateToProfile()
  {
    console.log('navigate to profile')
    this.router.navigate(['profile/'+this.username])
  }
  navigateToOrgProfile(organizationName)
  {
    console.log('organization name is '+organizationName)
    this.router.navigate(['traorg/'+organizationName+'/'+this.username])
  }

}
