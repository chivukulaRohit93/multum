import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myratings',
  templateUrl: './myratings.component.html',
  styleUrls: ['./myratings.component.css']
})
export class MyratingsComponent implements OnInit {

  closeResult = '';

  p: number = 1;
  collection = [
    { JobName : 'Service Provider 1', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"},
    { JobName : 'Service Provider 2', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"},
    { JobName : 'Service Provider 3', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"},
    { JobName : 'Service Provider 4', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"},
    { JobName : 'Service Provider 5', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"},
    { JobName : 'Service Provider 6', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"},
    { JobName : 'Service Provider 7', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"},
    { JobName : 'Service Provider 8', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"},
    { JobName : 'Service Provider 9', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', date:"04 Sep 2020"}
  ]

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open1(content1:any) {
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title1'}).result.then((result) => {
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

}
