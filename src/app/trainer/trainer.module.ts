import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
//import { TrainerDashboardComponent } from './components/trainer-dashboard/trainer-dashboard.component';
import { TrainerHomeComponent } from './components/trainer-home/trainer-home.component';
import { TrainerProfileComponent } from './components/trainer-profile/trainer-profile.component';
import { TraOrgComponent } from './components/tra-org/tra-org.component';


@NgModule({
  declarations: [LogInComponent, LogOutComponent, SignUpComponent,TrainerHomeComponent, TrainerProfileComponent, TraOrgComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut:4000,
        progressBar:true
      }
    )
  ],
  providers :[LogInComponent,LogOutComponent,SignUpComponent,BrowserAnimationsModule,ToastrModule,TrainerHomeComponent,TrainerProfileComponent,BrowserModule,TraOrgComponent],
  exports :[LogInComponent,LogOutComponent,SignUpComponent,BrowserAnimationsModule,ToastrModule,TrainerHomeComponent,TrainerProfileComponent,BrowserModule,TraOrgComponent]
})
export class TrainerModule { }
