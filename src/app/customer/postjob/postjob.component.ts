import { Component, OnInit } from '@angular/core';
import { Common2Service } from 'src/app/services/common2.service';
import { Person2 } from 'src/app/person2';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  viewmode = "hired";
  color:boolean = false;
  people!: Person2[];
  person:any = new Person2();
  tab : any = 'tab1';
  tab1 : any;
  tab2 : any;
  tab3 : any;
  tab4 : any;
  tab5 : any;
  constructor(private commonService:Common2Service) { }

  ngOnInit(): void {
    this.refreshPeople();
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

    refreshPeople() {
      this.commonService.getPeople()
        .subscribe(data => {
          console.log(data);
          this.people=data;
        });      
   
    }

    addPerson(){
      this.commonService.addPerson(this.person)
        .subscribe((data: any) => {
          console.log(data);
          this.refreshPeople();
        });      
          
    }


}
