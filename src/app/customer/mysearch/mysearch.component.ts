import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysearch',
  templateUrl: './mysearch.component.html',
  styleUrls: ['./mysearch.component.css']
})
export class MysearchComponent implements OnInit {

  showing:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showing = !this.showing;
  }

}
