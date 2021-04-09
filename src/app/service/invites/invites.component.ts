import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {

  p: number = 1;
  collection = [
    { JobName : 'Invitation 1', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Invitation 2', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Invitation 3', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Invitation 4', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Invitation 5', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Invitation 6', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Invitation 7', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Invitation 8', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Invitation 9', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
