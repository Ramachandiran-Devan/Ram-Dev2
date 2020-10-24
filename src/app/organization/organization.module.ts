import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgLoginComponent } from './components/org-login/org-login.component';
import { OrgLogoutComponent } from './components/org-logout/org-logout.component';
import { OrgSignupComponent } from './components/org-signup/org-signup.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OrgHomeComponent } from './components/org-home/org-home.component';
import { OrgProfileComponent } from './components/org-profile/org-profile.component';
import { OrgReqPostComponent } from './components/org-req-post/org-req-post.component';
import {BrowserModule} from '@angular/platform-browser';
import { OrgTraComponent } from './components/org-tra/org-tra.component';


@NgModule({
  declarations: [OrgLoginComponent, OrgLogoutComponent, OrgSignupComponent, OrgHomeComponent, OrgProfileComponent, OrgReqPostComponent, OrgTraComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(
      {
        timeOut:4000,
        progressBar:true
      }
    )
  ],
  providers:[OrgLoginComponent,OrgLogoutComponent,OrgSignupComponent,OrgHomeComponent,OrgProfileComponent,OrgReqPostComponent,BrowserModule,OrgTraComponent],
  exports:[OrgLoginComponent,OrgLogoutComponent,OrgSignupComponent,OrgHomeComponent,OrgProfileComponent,OrgReqPostComponent,BrowserModule,OrgTraComponent]
})
export class OrganizationModule { }
