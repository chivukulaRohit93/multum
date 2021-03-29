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
import { FormsModule } from '@angular/forms';
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
import { NavbarComponent } from './navbar/navbar.component';
import { MyjobsComponent } from './customer/myjobs/myjobs.component';
import { MyprofileComponent } from './customer/myprofile/myprofile.component';
import { PostjobComponent } from './customer/postjob/postjob.component';
import { Profile1Component } from './customer/profile1/profile1.component';
import { CreateaccComponent } from './customer/createacc/createacc.component';
import { MydescriptionComponent } from './customer/mydescription/mydescription.component';
import { MyreviewsComponent } from './customer/myreviews/myreviews.component';
import { MymessageComponent } from './customer/mymessage/mymessage.component';
import { MycontactComponent } from './customer/mycontact/mycontact.component';
import { MysearchComponent } from './customer/mysearch/mysearch.component';
import { MysettingsComponent } from './customer/mysettings/mysettings.component';
import { MypastjobsComponent } from './customer/mypastjobs/mypastjobs.component';
import { MyratingsComponent } from './customer/myratings/myratings.component';
import { SearchPipe } from './services/search.pipe';
import { MysearchPipe } from './services/mysearch.pipe';

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
    PastjobsComponent,
    NavbarComponent,
    MyjobsComponent,
    MyprofileComponent,
    PostjobComponent,
    Profile1Component,
    CreateaccComponent,
    MydescriptionComponent,
    MyreviewsComponent,
    MymessageComponent,
    MycontactComponent,
    MysearchComponent,
    MysettingsComponent,
    MypastjobsComponent,
    MyratingsComponent,
    SearchPipe,
    MysearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
