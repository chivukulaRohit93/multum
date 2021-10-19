import { Component, OnInit } from '@angular/core';
import { Common3Service } from 'src/app/services/common3.service';

@Component({
  selector: 'app-service-profile1',
  templateUrl: './service-profile1.component.html',
  styleUrls: ['./service-profile1.component.css']
})
export class ServiceProfile1Component implements OnInit {

  registerForm1: any = [];
  p:number =1;

  constructor(private common3Service: Common3Service) { }

  ngOnInit(): void {
    this.refreshPeople1();
    }
  
    refreshPeople1() {
      this.common3Service.getAll()
      .subscribe(
        (data:any []) => {
          for(var i=0;i<=data.length;i++){
            if(data[i].homeAddress) {
              this.registerForm1 = data[i];
              break;
            }
          }
          console.log(this.registerForm1);
          this.registerForm1 = data;
        },
        error => {
          console.log(error);
        });        
   
    }

    delete(id:any){
      this.common3Service.delete(id)
      .subscribe(
        response => {
          this.refreshPeople1();
        },
        error => {
          console.log(error);
        });
    }

}
