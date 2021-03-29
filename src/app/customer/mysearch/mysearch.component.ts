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

  hotels = [
    { Name : 'Maurice Huff', Address : 'Washington dc', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff', Address : 'Washington dc', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff', Address : 'Washington dc', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff', Address : 'Washington dc', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Maurice Huff', Address : 'Washington dc', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'}

  ];

}
