import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {

  p: number = 1;
  collection = [
    { JobName : 'Job1', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job2', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job3', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job4', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job5', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job6', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job7', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job8', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job9', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}
  ]
  constructor() { }

  ngOnInit(): void {
    
  }



}
