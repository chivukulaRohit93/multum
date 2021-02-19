import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
