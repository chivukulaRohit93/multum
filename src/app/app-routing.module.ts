import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { NavComponent } from 'src/app/nav/nav.component';
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

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
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
    {path:'past',component:PastjobsComponent}
  ]
},
  {path:'', redirectTo:'/login', pathMatch:'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
