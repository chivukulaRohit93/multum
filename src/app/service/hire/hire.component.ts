import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  viewmode = "hired";
  color:boolean = false;
  tab : any = 'tab1';
  tab1 : any;
  tab2 : any;
  tab3 : any;
  tab4 : any;
  tab5 : any;
  constructor() { }

  ngOnInit(): void {
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
        else{
          this.tab = 'tab5';
        }
      
    }

  //  onSwitch(check:any){
 
  //    switch (check) {
  //     case 1:
  //       return 'tab1';
  //     case 2:
  //       return 'tab2';
  //     case 3:
  //       return 'tab3';
  //     case 4:
  //       return 'tab4';
  //     case 5:
  //       return 'tab5';
  //   }


}
