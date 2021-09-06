import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {

  p: number = 1;

  closeResult = '';
  styles:boolean = false;
  in:boolean = true;
  show:boolean = false;
  showing:boolean = true;
  iferror:boolean = true;

   collection = [
    { JobName : 'Job1', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job2', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job3', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job4', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job5', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job6', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job7', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job8', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Job9', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}
  ]
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
