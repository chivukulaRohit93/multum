import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  styles:boolean = false;
  in:boolean = true;
  show:boolean = false;
  showing:boolean = false;
  showing1:boolean = false;
  iferror:boolean = true;
  tab : any;
  tab1 : any;
  tab2 : any;
  tab3 : any;
  tab4 : any;
  tab5 : any;
  tab6 : any;
  tab7 : any;
  tab8 : any; 
  
  constructor() {}

  ngOnInit(): void {
  }

  toggle(){
    this.show = !this.show;
    }
    toggle1(){
       this.showing = !this.showing;
       this.showing1 = !this.showing1;
       this.in = !this.in;
    }
  style(){
    this.styles = true;
  }

  onClick(check:any){
    //    console.log(check);
        if(check==1){
          this.tab = 'tab1';
        }else if(check==2){
          this.tab = 'tab2';
        }else if(check==3){
          this.tab = 'tab3';
        }    
        else if(check==4){
          this.tab = 'tab4';
        }
        else if(check==5){
          this.tab = 'tab5';
        }
        else if(check==6){
          this.tab = 'tab6';
        }
        else if(check==7){
          this.tab = 'tab7';
        }
        else{
          this.tab = 'tab8';
        }
      
    }

}
