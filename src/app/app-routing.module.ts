import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgHomeComponent } from './organization/components/org-home/org-home.component';
import { OrgLoginComponent } from './organization/components/org-login/org-login.component';
import { OrgLogoutComponent } from './organization/components/org-logout/org-logout.component';
import { OrgProfileComponent } from './organization/components/org-profile/org-profile.component';
import { OrgReqPostComponent } from './organization/components/org-req-post/org-req-post.component';
import { OrgSignupComponent } from './organization/components/org-signup/org-signup.component';
import { OrgTraComponent } from './organization/components/org-tra/org-tra.component';
import { LogInComponent } from './trainer/components/log-in/log-in.component';
import { LogOutComponent } from './trainer/components/log-out/log-out.component';
import { SignUpComponent } from './trainer/components/sign-up/sign-up.component';
import { TraOrgComponent } from './trainer/components/tra-org/tra-org.component';
//import { TrainerDashboardComponent } from './trainer/components/trainer-dashboard/trainer-dashboard.component';
import { TrainerHomeComponent } from './trainer/components/trainer-home/trainer-home.component';
import { TrainerProfileComponent } from './trainer/components/trainer-profile/trainer-profile.component';

const routes: Routes = [
  {path :'login',component:LogInComponent},
  {path :'',component:LogInComponent},
  {path :'logout',component:LogOutComponent},
  {path :'signup',component:SignUpComponent},
  {path:'orglogin',component:OrgLoginComponent},
  {path:'orglogout',component:OrgLogoutComponent},
  {path:'orgsignup',component:OrgSignupComponent},
  //{path:'dashboard',component:TrainerDashboardComponent},
  {path:'home/:username',component:TrainerHomeComponent},
  {path:'home',component:TrainerHomeComponent},
  {path:'profile/:username',component:TrainerProfileComponent},
  {path:'orghome/:username',component:OrgHomeComponent},
  {path:'orgprofile/:username',component:OrgProfileComponent},
  {path:'orgpostreq/:username',component:OrgReqPostComponent},
  {path:'traorg/:orgname/:username',component:TraOrgComponent},
  {path:'orgtra/:trausername/:username',component:OrgTraComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
