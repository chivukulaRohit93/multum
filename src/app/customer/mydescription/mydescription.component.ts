import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-mydescription',
  templateUrl: './mydescription.component.html',
  styleUrls: ['./mydescription.component.css']
})
export class MydescriptionComponent implements OnInit {

  @Input() message:any = [];

  p: number = 1;
  collection = [
    { JobName : 'Service Provider 1', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 2', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 3', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 4', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 5', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 6', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 7', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 8', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 9', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 10', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 11', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
    { JobName : 'Service Provider 12', description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
