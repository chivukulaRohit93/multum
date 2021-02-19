import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './service/history/history.component';
import { BackgroundComponent } from './service/background/background.component';
import { ProfileComponent } from './service/profile/profile.component';
import { ReviewComponent } from './service/review/review.component';
import { JobsComponent } from './service/jobs/jobs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HireComponent } from './service/hire/hire.component';
import { SearchjobComponent } from './service/searchjob/searchjob.component';
import { JobdetailsComponent } from './service/jobdetails/jobdetails.component';
import { MessageComponent } from './service/message/message.component';
import { InvitesComponent } from './service/invites/invites.component';
import { PastjobsComponent } from './service/pastjobs/pastjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    CustomerComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    HistoryComponent,
    BackgroundComponent,
    ProfileComponent,
    ReviewComponent,
    JobsComponent,
    HireComponent,
    SearchjobComponent,
    JobdetailsComponent,
    MessageComponent,
    InvitesComponent,
    PastjobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
