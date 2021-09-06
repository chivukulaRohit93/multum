import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { NavComponent } from 'src/app/nav/nav.component';
import { ContactComponent } from 'src/app/service/contact/contact.component';
import { SettingsComponent } from 'src/app/service/settings/settings.component';
import { SignupComponent } from 'src/app/signup/signup.component';
import { HistoryComponent } from 'src/app/service/history/history.component';
import { BackgroundComponent } from 'src/app/service/background/background.component';
import { ProfileComponent } from 'src/app/service/profile/profile.component';
import { ReviewComponent } from 'src/app/service/review/review.component';
import { JobsComponent } from 'src/app/service/jobs/jobs.component';
import { HireComponent } from './service/hire/hire.component';
import { SearchjobComponent } from './service/searchjob/searchjob.component';
import { JobdetailsComponent } from './service/jobdetails/jobdetails.component';
import { MessageComponent } from 'src/app/service/message/message.component';
import { InvitesComponent } from './service/invites/invites.component';
import { PastjobsComponent } from './service/pastjobs/pastjobs.component';
import { CreateaccComponent } from './customer/createacc/createacc.component';
import { MydescriptionComponent } from './customer/mydescription/mydescription.component';
import { MyjobsComponent } from './customer/myjobs/myjobs.component';
import { MyprofileComponent } from './customer/myprofile/myprofile.component';
import { MyreviewsComponent } from './customer/myreviews/myreviews.component';
import { PostjobComponent } from './customer/postjob/postjob.component';
import { Profile1Component } from './customer/profile1/profile1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MymessageComponent } from './customer/mymessage/mymessage.component';
import { MysearchComponent } from './customer/mysearch/mysearch.component';
import { MycontactComponent } from './customer/mycontact/mycontact.component';
import { MysettingsComponent } from './customer/mysettings/mysettings.component';
import { MypastjobsComponent } from './customer/mypastjobs/mypastjobs.component';
import { MyratingsComponent } from './customer/myratings/myratings.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { Mydescription1Component } from './customer/mydescription1/mydescription1.component';
import { DescriptionComponent } from './service/description/description.component';
import { Description1Component } from './service/description1/description1.component';
import { MydetailsComponent } from './customer/mydetails/mydetails.component';
import { MyhireComponent } from './customer/myhire/myhire.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'mylogin',component:MyloginComponent},
  {path:'nav',component:NavComponent, children:[
    {path:'history',component:HistoryComponent},
    {path:'background',component:BackgroundComponent},
    {path:'profile',component:ProfileComponent},
    {path:'review',component:ReviewComponent},
    {path:'jobs',component:JobsComponent},
    {path:'hire',component:HireComponent},
    {path:'search',component:SearchjobComponent},
    {path:'details',component:JobdetailsComponent},
    {path:'message',component:MessageComponent},
    {path:'invites',component:InvitesComponent},
    {path:'past',component:PastjobsComponent},
    {path:'contact',component:ContactComponent},
    {path:'settings',component:SettingsComponent},
    {path:'description',component:DescriptionComponent},
    {path:'description1',component:Description1Component}
  ]
},
{path:'navbar',component:NavbarComponent, children:[
  {path:'createacc',component:CreateaccComponent},
  {path:'mydescription',component:MydescriptionComponent},
  {path:'myjobs',component:MyjobsComponent},
  {path:'myprofile',component:MyprofileComponent},
  {path:'myreviews',component:MyreviewsComponent},
  {path:'post',component:PostjobComponent},
  {path:'profile1',component:Profile1Component},
  {path:'mymessage',component:MymessageComponent},
  {path:'mysearch',component:MysearchComponent},
  {path:'mycontact',component:MycontactComponent},
  {path:'mysettings',component:MysettingsComponent},
  {path:'mypastjobs',component:MypastjobsComponent},
  {path:'create',component:CreateaccComponent},
  {path:'myratings',component:MyratingsComponent},
  {path:'mydescription1',component:Mydescription1Component},
  {path:'mydetails',component:MydetailsComponent},
  {path:'myhire',component:MyhireComponent}

]
},
  {path:'', redirectTo:'/login', pathMatch:'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
