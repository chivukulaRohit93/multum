import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})
export class SearchjobComponent implements OnInit {

  showing:boolean = false;
  searchterm!:any;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showing = !this.showing;
  }

  hotels = [
    { JobName : 'Job1', Address : 'Washington dc, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job2', Address : 'Washington dc, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job3', Address : 'Washington dc, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job4', Address : 'Washington dc, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}

  ];

}
