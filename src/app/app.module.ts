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
import {NgxPaginationModule} from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './service/history/history.component';
import { BackgroundComponent } from './service/background/background.component';
import { ProfileComponent } from './service/profile/profile.component';
import { ReviewComponent } from './service/review/review.component';
import { JobsComponent } from './service/jobs/jobs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AccordionModule }    from 'ngx-bootstrap/accordion';
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
import { MyloginComponent } from './mylogin/mylogin.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { ContactComponent } from './service/contact/contact.component';
import { SettingsComponent } from './service/settings/settings.component';
import { MaterialModule } from './material/material.module';
import {DatePipe} from '@angular/common';
import { Mydescription1Component } from './customer/mydescription1/mydescription1.component';
import { DescriptionComponent } from './service/description/description.component';
import { Description1Component } from './service/description1/description1.component';
import { MydetailsComponent } from './customer/mydetails/mydetails.component';
import { MyhireComponent } from './customer/myhire/myhire.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { IntlModule } from '@progress/kendo-angular-intl';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MypostComponent } from './customer/mypost/mypost.component';
import { ProfileDetailsComponent } from './customer/profile-details/profile-details.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ServiceProfileEditComponent } from './service/service-profile-edit/service-profile-edit.component';
import { ServiceProfile1Component } from './service/service-profile1/service-profile1.component';





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
    MysearchPipe,
    MyloginComponent,
    DateTimePickerComponent,
    ContactComponent,
    SettingsComponent,
    Mydescription1Component,
    DescriptionComponent,
    Description1Component,
    MydetailsComponent,
    MyhireComponent,
    MypostComponent,
    ProfileDetailsComponent,
    ServiceProfileEditComponent,
    ServiceProfile1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),    
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    MaterialModule,
    AccordionModule.forRoot(),
    IntlModule,
    DateInputsModule,
    InputsModule,
    NumericTextBoxModule,
    DropDownsModule,
    AmazingTimePickerModule
  ],
  providers: [DatePipe , MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
