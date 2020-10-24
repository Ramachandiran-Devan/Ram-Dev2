import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrgServiceService} from './../../services/org-service.service';

@Component({
  selector: 'app-org-tra',
  templateUrl: './org-tra.component.html',
  styleUrls: ['./org-tra.component.css']
})
export class OrgTraComponent implements OnInit {
  trausername:string;
  username:string
  trainer;
  trainerAssignments=[]
  trainerDemoSessions=[]
  profileName:string
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private orgservice:OrgServiceService) { }

  ngOnInit(): void {

    this.trausername=this.activatedRoute.snapshot.paramMap.get('trausername')
    this.username=this.activatedRoute.snapshot.paramMap.get('username')
    this.orgservice.getTrainerByUserName(this.trausername).subscribe(result=>
    {
      console.log(result)
        this.trainer=result
        this.trainerAssignments=this.trainer.trainerAssignment
        this.trainerDemoSessions=this.trainer.trainerDemoVideo
        this.profileName=this.trainer.trainer.firstName.charAt(0).toUpperCase();
    })

  }

  navigateToOrgHome()
  {
    this.router.navigate(['orghome/'+this.username])
  }
}
