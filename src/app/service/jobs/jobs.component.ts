import { Component, OnInit ,Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  closeResult = '';
  styles:boolean = false;
  in:boolean = true;
  show:boolean = false;
  showing:boolean = true;
  iferror:boolean = true;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  toggle(){
    return this.show = !this.show;
    }
    toggle1(){
      return this.showing = !this.showing;
    }

    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
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

    style(){
      this.styles = true;
    }
    
  

}
