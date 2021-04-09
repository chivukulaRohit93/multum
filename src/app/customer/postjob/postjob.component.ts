import { Component, OnInit } from '@angular/core';
import { Common2Service } from 'src/app/services/common2.service';
import { Person2 } from 'src/app/person2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  myDate!: Date;
  timepicker!:Date;
  tab : any = 'tab1';
  tab1 : any;
  tab2 : any;
  tab3 : any;
  tab4 : any;
  tab5 : any;
  jobForm!: FormGroup;
  priceForm!:FormGroup;
  reviewForm!:FormGroup;

  constructor(private formBuilder: FormBuilder ,private commonService:Common2Service) { }

  ngOnInit(): void {
    this.formValidation();
    this.formvalidation1();
    this.formValidation2();
    
    

  }

  formValidation(){
    this.jobForm = this.formBuilder.group({
      jobtitle: ['', [Validators.required]],
      dateneedstoknow: ['', Validators.required],
      pickupaddress: ['', Validators.required],
      pickupaddress1: ['', Validators.required],      
      pickupaddress2: ['', Validators.required],
      pickupaddress3: [''],
      pickupaddress4: ['' ],
      dropoffaddress: ['', Validators.required],
      dropoffaddress1: ['', Validators.required],
      dropoffaddress2: ['', Validators.required],
      dropoffaddress3: [''],
      dropoffaddress4: ['']
    });

    
  }

  formvalidation1(){
    this.priceForm = this.formBuilder.group({
      chooseprice: ['', [Validators.required]]
    });    
  }

  formValidation2(){
    this.reviewForm = this.formBuilder.group({
      cardnumber: ['', [Validators.required]],
      cvv: ['', Validators.required],
      cardexpiry: ['', Validators.required]
    });
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

    

    


}
