import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import {TrainerService} from './.././../services/trainer.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  trainerForm:FormGroup
  dbSkills=[]
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  mobilePattern="[0-9]{10}"
  constructor(private http:HttpClient,private router:Router,private trainerservice:TrainerService,private formbuilder:FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.trainerForm=this.formbuilder.group(
      {
       firstName:new FormControl('',[Validators.required]),
       lastName:new FormControl('',[Validators.required]),
       dob:new FormControl('',[Validators.required]),
       email:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
       mobileNum:new FormControl('',[Validators.required,Validators.pattern(this.mobilePattern)]),
       highestDegree:new FormControl('',Validators.required),
       totalExperience:new FormControl('1',[Validators.required]),
       trainingExperice:new FormControl('1',[Validators.required]),
       address:new FormControl(),
       username:new FormControl('',[Validators.required]),
       password:new FormControl('',[Validators.required]),
       skills:new FormArray([])
      }
    );
    this.trainerservice.getSkills().subscribe(result=>
      {
        this.dbSkills=result
        console.log(result)
        for(var i=0;i<this.dbSkills.length;i++)
        {
          this.skills.push(new FormControl())
        }
          console.log("the skill length is "+this.trainerForm.value.skills.length)
      })
  }
  get skills()
  {
    return this.trainerForm.get('skills') as FormArray;
  }
  saveTrainer()
  {
    if(this.trainerForm.invalid)
    {
      this.trainerForm.markAllAsTouched()
      this.toastr.warning('Please provide required fields')
      if(this.trainerForm.get('mobileNum').errors.pattern)
      {
       this.toastr.info('Enter valid mobile number')
      }
      if(this.trainerForm.get('email').errors.pattern)
      {
        this.toastr.info('Enter valid email id')
      }
    }
    else
    {
      this.toastr.success('ok')
      this.trainerservice.checkUserName(this.trainerForm.value.username).subscribe(result=>{
        console.log('the result is '+result)
        if(result.message=='user-taken')
        {
          this.toastr.warning('user name is already taken please provide different username')
        }
        else
        {
          var selectedSkills=[]
          for(let i=0;i<this.skills.controls.length;i++)
          {
           if(this.skills.controls[i].value==true)
           {
            selectedSkills.push({id:this.dbSkills[i].id})
           }
          } 
          this.trainerForm.value.skills=selectedSkills;
          console.log(this.trainerForm.value)
          this.trainerservice.saveTrainer(this.trainerForm).subscribe(result=>
          {
          console.log(result)
          this.toastr.success('your data saved successfully')
          this.router.navigate(['login'])
       
       })
    }
  })
      
 }
  
}
  get firstName()
  {
    return this.trainerForm.get('firstName')
  }

}

/*
<!--private String firstName;
	private String lastName;
	private Date dob;
	private String email;
	private Integer mobileNum;
	private String highestDegree;
	private Integer totalExperience;
	private Integer trainingExperice;
	private String address;
	private String username;
	private String password;
	private String roles;
	@ManyToMany(fetch=FetchType.EAGER)
	private List<Skill> skills=new ArrayList<Skill>()*/