import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  styles:boolean = false;
  show:boolean = false;
  showing:boolean = true;
  iferror:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    return this.show = !this.show;
    }
    toggle1(){
      return this.showing = !this.showing;
    }
    style(){
      this.styles = true;
    }

}
