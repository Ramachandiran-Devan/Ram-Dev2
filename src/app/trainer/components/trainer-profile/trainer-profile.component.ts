import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TrainerService} from './.././../services/trainer.service'

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {

  assignmentForm:FormGroup
  //demoSessionFrom:FormGroup
  username:string
  trainer;
  trainerId;
  showOnlyAssForm=false
  showOnlyDemoForm=false
  trainerAssignments=[]
  trainerDemoSessions=[]
  profileName;
  showTrainerAssForm=false
  showDemoSessionForm=false
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private trainerservice:TrainerService,private http:HttpClient,private formbuilder:FormBuilder,private formbuilder1:FormBuilder) { }

  ngOnInit(): void {
     this.assignmentForm=this.formbuilder.group(
      {
       trainerId:new FormControl(),
       OrganizationName:new FormControl(),
       startDate:new FormControl(),
       Duration:new FormControl(),
       videoType:new FormControl(),
       videoUrl:new FormControl(),
       duration:new FormControl()
      }
    );
    var username=this.activatedRoute.snapshot.paramMap.get('username')
    this.username=username

    console.log('from profile user name is '+this.username)
    this.trainerservice.findTrainerByUserName(this.username).subscribe(result=>
      {
        console.log(result)
        console.log('this is result after calling service method '+result.firstName +' '+result.username)
        this.trainer=result
        this.trainerId=this.trainer.trainer.id
        this.trainerAssignments=this.trainer.trainerAssignment
        this.trainerDemoSessions=this.trainer.trainerDemoVideo
        console.log(this.trainerAssignments)
        console.log(this.trainerDemoSessions)
        this.profileName=this.trainer.trainer.firstName.charAt(0).toUpperCase();
        console.log('after assiging value to person ...checking person passwrd '+this.trainer.trainer.password)
      })

  }
  addNewAssignment()
  {
    console.log("add new ass works")
    if(this.showTrainerAssForm==false)
    {
      this.showTrainerAssForm=true
    }
    else{
      this.showTrainerAssForm=false
    }
    this.showOnlyAssForm=true
    this.showOnlyDemoForm=false
  }
  addNewDemo()
  {
    console.log("add new Demo works")
   if(this.showTrainerAssForm==false)
   {
    this.showTrainerAssForm=true
   }
   else{
     this.showTrainerAssForm=false
   }
   this.showOnlyDemoForm=true
   this.showOnlyAssForm=false
  }
  saveAssignmentForm()
  {
    if(this.showOnlyAssForm==true && this.showOnlyDemoForm==false)
    {
      this.trainerservice.trainerId=this.trainerId
      console.log('the trainer id is '+this.trainerId)
      this.assignmentForm.value.trainerId=this.trainerId
      console.log('assignment form id is'+this.assignmentForm.value.trainerId)
      //var assignmentValue={trainerId:this.assignmentForm.value.trainerId,organizationName:this.assignmentForm.value.OrganizationName,startDate:this.assignmentForm.value.startDate,duration:this.assignmentForm.value.Duration}
      this.trainerservice.saveAssignment(this.assignmentForm).subscribe(result=>
        {
          console.log(result)
          this.assignmentForm.reset()
        })
      window.location.reload()
    }
    else
    {
       this.trainerservice.trainerId=this.trainerId
       console.log(this.assignmentForm.value)
       this.trainerservice.saveDemo(this.assignmentForm).subscribe(result=>{
         console.log(result)
         this.assignmentForm.reset()
       })
       window.location.reload()

    }
  }
  /*saveDemoSessionForm()
  {
    this.demoSessionFrom.value.trainerId=this.trainer.trainerId
    console.log(this.demoSessionFrom.value)
    this.demoSessionFrom.reset()
  }*/
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
    this.router.navigate(['profile/'+this.username])
  }

}
