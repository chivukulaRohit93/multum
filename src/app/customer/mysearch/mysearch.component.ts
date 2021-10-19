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
    { Name : 'Infosys', Address : 'Washington dc 1', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Accenture', Address : 'Washington dc 2', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Tech Mahindra', Address : 'Washington dc 3', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Mind Tree', Address : 'Washington dc 4', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Qualcomm', Address : 'Washington dc 5', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Google', Address : 'Washington dc 6', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Microsoft', Address : 'Washington dc 7', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Wipro', Address : 'Washington dc 8', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'},
    { Name : 'Amazon', Address : 'Washington dc 9', Jobs : 'Jobs done on Multum',cost: 'Average Job Cost : $250.00'}

  ];

}
