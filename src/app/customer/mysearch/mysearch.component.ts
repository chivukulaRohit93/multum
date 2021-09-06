import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysearch',
  templateUrl: './mysearch.component.html',
  styleUrls: ['./mysearch.component.css']
})
export class MysearchComponent implements OnInit {

  showing:boolean = false;
  searchterm!:any;
  public isCollapsed = true;
  public autoCorrect = false;
  public value = 5;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showing = !this.showing;
  }

  p: number = 1;
  hotels = [
    { Name : 'Job 1', Address : 'Washington dc 1', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Job 2', Address : 'Washington dc 2', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Job 3', Address : 'Washington dc 3', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Job 4', Address : 'Washington dc 4', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Job 5', Address : 'Washington dc 5', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Job 6', Address : 'Washington dc 6', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Job 7', Address : 'Washington dc 7', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Job 8', Address : 'Washington dc 8', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Job 9', Address : 'Washington dc 9', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'}

  ];

}
