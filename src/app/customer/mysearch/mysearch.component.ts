import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysearch',
  templateUrl: './mysearch.component.html',
  styleUrls: ['./mysearch.component.css']
})
export class MysearchComponent implements OnInit {

  showing:boolean = false;
  searchterm!:any;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showing = !this.showing;
  }

  p: number = 1;
  hotels = [
    { Name : 'Maurice Huff 1', Address : 'Washington dc 1', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff 2', Address : 'Washington dc 2', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff 3', Address : 'Washington dc 3', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff 4', Address : 'Washington dc 4', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff 5', Address : 'Washington dc 5', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff 6', Address : 'Washington dc 6', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff 7', Address : 'Washington dc 7', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff 8', Address : 'Washington dc 8', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff 9', Address : 'Washington dc 9', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'}

  ];

}
