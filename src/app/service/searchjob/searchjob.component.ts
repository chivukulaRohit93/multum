import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})
export class SearchjobComponent implements OnInit {

  showing:boolean = false;
  searchterm!:any;
  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showing = !this.showing;
  }

  p: number = 1;
  hotels = [
    { JobName : 'Job 1', Address : 'Washington dc 1, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job 2', Address : 'Washington dc 2, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job 3', Address : 'Washington dc 3, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job 4', Address : 'Washington dc 4, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job 5', Address : 'Washington dc 5, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job 6', Address : 'Washington dc 6, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job 7', Address : 'Washington dc 7, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job 8', Address : 'Washington dc 8, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job 9', Address : 'Washington dc 9, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}

  ];

}
