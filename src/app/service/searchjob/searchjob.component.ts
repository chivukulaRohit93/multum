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
    { JobName : 'Infosys', Address : 'Washington dc 1, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Accenture', Address : 'Washington dc 2, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Tech Mahindra', Address : 'Washington dc 3, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Mind Tree', Address : 'Washington dc 4, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Qualcomm', Address : 'Washington dc 5, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Google', Address : 'Washington dc 6, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Microsoft', Address : 'Washington dc 7, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Wipro', Address : 'Washington dc 8, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Amazon', Address : 'Washington dc 9, 5004', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}

  ];

}
