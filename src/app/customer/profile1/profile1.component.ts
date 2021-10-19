import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Person4 } from 'src/app/person4';
import { Common4Service } from 'src/app/services/common4.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.css']
})
export class Profile1Component implements OnInit {

  closeResult = '';
  registerForm1: any = [];
  submitted = false;
  p:number =1;
  employeeData: any = {};
  currentpeople: any;
  // employeeData: any = {};
  
  public s1:any;
  public s2:any;
  public s3:any;
  public s4:any;
  public s5:any;


  constructor(private modalService: NgbModal,private formBuilder: FormBuilder, private common4Service: Common4Service, public actRoute: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  this.refreshPeople1();
  }

  refreshPeople1() {
    this.common4Service.getAll1()
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
    this.common4Service.delete(id)
    .subscribe(
      response => {
        this.refreshPeople1();
      },
      error => {
        console.log(error);
      });
  }

  // open(content:any,person4:any) {
  //   console.log('currentvalue');
  //   console.log(person4);
  //   console.log(person4.id);
  //   this.modalService.open(content,person4.id).result.then((result) => {

  //     this.refreshPeople1();

  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  

  // update(person4: any) {
  //   // console.log(this.registerForm1.value);
  //   console.log('update called');
  //   console.log(this.registerForm1);
  //   this.common4Service.update(this.id, this.employeeData).subscribe(data => {
  //     console.log(this.employeeData);
  //     this.submitted = true;
  //   });
    
  // }

  get f() { return this.registerForm1.controls; }

}
