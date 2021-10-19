import { Component, OnInit, ViewChild } from '@angular/core';
import { Common5Service } from 'src/app/services/common5.service';
import { Person2 } from 'src/app/person2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DatePipe , formatDate } from '@angular/common';




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
  submitted = false;
  submitted1 = false;
  submitted2 = false;
  tab : any = 'tab1';
  tab1 : any;
  tab2 : any;
  tab3 : any;
  tab4 : any;
  tab5 : any;
  jobForm!: FormGroup;
  price = this.person.price;
  serviceFee = '';
  multumFee = '';
  totalPrice = '';
  value = '';
  hm = 'hh:mm a';

  constructor(private formBuilder: FormBuilder ,private common5Service:Common5Service,private datePipe: DatePipe) { }



  ngOnInit(): void {
    this.jobForm = this.formBuilder.group({
      personal: this.formBuilder.group({
        title: ['', Validators.required],
      completionDate: ['', Validators.required],
      completionTime: ['', Validators.required],
      pickupType: ['', Validators.required],
      pickUpAddress: this.formBuilder.group({
        street1: ['', [Validators.required]],
        landMark: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
        zipCode: ['', [Validators.required]]
      }),
      dropOffAddress: this.formBuilder.group({
        street1: ['', [Validators.required]],
        landMark: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
        zipCode: ['', [Validators.required]]
      })
      }),
      priceValue: this.formBuilder.group({
        price: ['', Validators.required],
      serviceFee: [''],
      multumFee: [''],
      totalPrice: ['']
      }),
      review: this.formBuilder.group({
        cardNumber: ['', Validators.required],
      cardCvv: ['', Validators.required],
      cardExpirationDate: ['', Validators.required]
      })
      
    });

    this.refreshPeople();

    console.log(this.jobForm.value);

  }

  RADIO_LIST = [
    { name: 'Person', value: 'PERSON', checked: false },
    { name: 'Item', value: 'ITEM', checked: false }
  ];

  Price: any = [90, 100, 150, 200, 250, 300]

  get f() { return this.jobForm.get('personal'); }

  get f1() { return this.jobForm.get('priceValue'); }

  get f2() { return this.jobForm.get('review'); }

  priceChange($event: any){
    
    this.person.price = $event.substring($event.lastIndexOf(':') + 1);
    // console.log(this.person.price);
     this.person.serviceFee = this.person.price * 90/100;
    this.person.multumFee = this.person.price * 10/100;
    this.person.totalPrice = this.person.price;
  }


  refreshPeople() {
    this.common5Service.getAll()
      .subscribe(
        data => {
          for(var i=0;i<=data.length;i++){
            if(data[i].pickUpAddress) {
              this.people = data[i];
              break;
            }
          }
          for(var i=0;i<=data.length;i++){
            if(data[i].dropOffAddress) {
              this.people = data[i];
              break;
            }
          }
          this.people = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

  }

  addPerson() {


    const date = new Date(this.jobForm.value.personal.completionDate);
    this.jobForm.value.personal.completionDate = moment(date).format('MM/DD/YYYY');
    console.log(this.jobForm.value.personal.completionDate);
    const date1 = this.jobForm.value.personal.completionTime;
    this.jobForm.value.personal.completionTime = moment(date1, "hh:mm a").format("hh:mm a");
    console.log(this.jobForm.value.personal.completionTime);
    const date2 = new Date(this.jobForm.value.review.cardExpirationDate);
    this.jobForm.value.review.cardExpirationDate = moment(date).format('MM/YYYY');
    console.log(this.jobForm.value.review.cardExpirationDate);

//     moment.locale();         // en
// moment().format('LT');

    this.common5Service.create(this.jobForm.value)
    .subscribe(
      response => {

        console.log(this.jobForm.value);
      //  this.submitted = true;
      },
      error => {
        console.log(error);
      });


      this.submitted = true;
      this.submitted2 = true;
      this.submitted1 = true;

      if(this.jobForm.invalid) {
        return;
      }


  }


  onClick(check:any){
    //    console.log(check);
    if(this.f.valid){
      if(check==1){
        this.tab = 'tab1';
        }
      else if(this.f.valid){
        if(check==2){
          this.tab = 'tab2';
        }
      
      else if(this.f1.valid){
        if(check==3){
          this.tab = 'tab3';
        }
      }  
    }
  }

    }







}

