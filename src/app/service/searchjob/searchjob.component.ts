import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.css']
})
export class SearchjobComponent implements OnInit {

  showing:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showing = !this.showing;
  }

}
