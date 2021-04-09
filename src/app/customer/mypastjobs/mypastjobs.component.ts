import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypastjobs',
  templateUrl: './mypastjobs.component.html',
  styleUrls: ['./mypastjobs.component.css']
})
export class MypastjobsComponent implements OnInit {

  p: number = 1;
  collection = [
    { JobName : 'Job1', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"},
    { JobName : 'Job2', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"},
    { JobName : 'Job3', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"},
    { JobName : 'Job4', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"},
    { JobName : 'Job5', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"},
    { JobName : 'Job6', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"},
    { JobName : 'Job7', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"},
    { JobName : 'Job8', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"},
    { JobName : 'Job9', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' , date: "04 Sep 2020",price:"$250.00"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
