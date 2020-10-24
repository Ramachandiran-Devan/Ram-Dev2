import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{TrainerService} from './../../services/trainer.service'

@Component({
  selector: 'app-tra-org',
  templateUrl: './tra-org.component.html',
  styleUrls: ['./tra-org.component.css']
})
export class TraOrgComponent implements OnInit {

  organizationName:any
  organizationProfile:any
  organizationIcon:any
  username:string
  constructor(private activatedRoute:ActivatedRoute,private trainerservice:TrainerService,private router:Router) { }

  ngOnInit(): void {
    this.organizationName=this.activatedRoute.snapshot.paramMap.get('orgname')
    this.username=this.activatedRoute.snapshot.paramMap.get('username')
    console.log('organization name is from tra-org '+this.organizationName)
    this.trainerservice.getOrganizationByOrgName(this.organizationName).subscribe(result=>
      {
        console.log(result)
        this.organizationProfile=result
        this.organizationIcon=this.organizationProfile.organizationName.charAt(0).toUpperCase()
      })
  }
  navigateToHome()
  {
    this.router.navigate(['home/'+this.username])
  }

}
