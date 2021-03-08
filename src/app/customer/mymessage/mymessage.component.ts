import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymessage',
  templateUrl: './mymessage.component.html',
  styleUrls: ['./mymessage.component.css']
})
export class MymessageComponent implements OnInit {

  constructor() { }

  viewmode = "service1";
  show:boolean = false;
  tab : any = 'tab1';
  tab1 : any;
  tab2 : any;
  tab3 : any;
  tab4 : any;
  tab5 : any;
  tab6 : any;
  tab7 : any;
  ngOnInit(): void {
  }

  tog(){
    this.show = !this.show;
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
        else{
          this.tab = 'tab7';
        }
      
    }


}
