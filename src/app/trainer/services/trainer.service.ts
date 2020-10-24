import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';import { Observable, observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  trainerId;
  trainer;
  trainerURL='http://localhost:8082/trainer'
  skillURL='http://localhost:8082/skill'
  assignmentURL='http://localhost:8082/assignment'
  demoURL='http://localhost:8082/demo'
  getPostsURL='http://localhost:8082/trainer/posts'
  organizationLogin='http://localhost:8082/organization'
  constructor(private http:HttpClient) { }

  trainerLogin(credentials:string)
  {
    //let credentials='Basic '+btoa(loginForm.value.username+':'+loginForm.value.password)
    let headers=new HttpHeaders({Authorization:credentials})
    return this.http.get<any>(this.trainerURL,{headers});

  }
  getSkills()
  {
    return this.http.get<any>(this.skillURL);
  }
  saveAssignment(assignment:FormGroup)
  {
    console.log('service class trainer id is '+this.trainerId)
    var assignmentValue={trainerId:this.trainerId,organizationName:assignment.value.OrganizationName,startDate:assignment.value.startDate,duration:assignment.value.Duration}
    console.log('assignment value is '+assignmentValue.trainerId)
    return this.http.post(this.assignmentURL,assignmentValue)
  }
  saveDemo(demo:FormGroup)
  {
    var demoValue={trainerId:this.trainerId,videoType:demo.value.videoType,videoUrl:demo.value.videoUrl,duration:demo.value.duration}
    return this.http.post(this.demoURL,demoValue)
  }
  saveTrainer(trainerForm:FormGroup)
  {
    console.log("this is service")
    console.log(trainerForm.value)
    return this.http.post(this.trainerURL+'/save',trainerForm.value);
  }
  findTrainerByUserName(username:string)
  {
    let credentials=sessionStorage.getItem('head')
    //console.log('head value is'+credentials)
    let headers=new HttpHeaders({Authorization:credentials})
    //console.log(this.http.get<any>(this.trainerURL+'/'+'findtrainer/'+username,{headers}))
    return this.trainer=this.http.get<any>(this.trainerURL+'/'+'findtrainer/'+username,{headers})
    
  }
  getOrganizationByOrgName(orgname:string)
  {
    return this.http.get<any>(this.organizationLogin+'/getorg'+'/'+orgname)
  }
  checkUserName(username)
  {
    return this.http.get<any>(this.trainerURL+'/check/'+username)
  }
  getAllPosts()
  {
    return this.http.get<any>(this.getPostsURL)
  }
}
