import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrgServiceService {

  organizationURL='http://localhost:8082/organization/save'
  organizationLogin='http://localhost:8082/organization'
  organizationPost='http://localhost:8082/trainingpost/save'
  trainerURL='http://localhost:8082/trainer'
  constructor(private http:HttpClient) { }

  saveOrganization(orgForm:FormGroup)
  {
    return this.http.post(this.organizationURL,orgForm.value)
  }
  orglogIn(logForm:FormGroup)
  {
    let credentials='Basic '+btoa(logForm.value.username+':'+logForm.value.password)
    let headers= new HttpHeaders({Authorization:credentials})
    return this.http.get<any>(this.organizationLogin,{headers})
  }
  savePostRequirment(postReq:FormGroup)
  {
    var reqPost={organizationName:postReq.value.organizationName,startDate:postReq.value.startDate,duration:postReq.value.duration,skillsDesc:postReq.value.skillsDesc}
    return this.http.post(this.organizationPost,reqPost)
  }
  getOrganizationByUserName(username:string)
  {
    return this.http.get<any>(this.organizationLogin+'/get'+'/'+username)
  }
  getAllTrainers()
  {
    return this.http.get<any>(this.organizationLogin+'/get/trainers')
  }
  getTrainerByUserName(username:string)
  {
    return this.http.get<any>(this.trainerURL+'/'+'findtrainer/'+username)
  }
  checkUserNameAndOrgName(organizationName:string,username:string)
  {
    return this.http.get<any>(this.organizationLogin+'/check/'+organizationName+'/'+username)
  }
}
