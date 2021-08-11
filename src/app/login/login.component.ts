import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Common1Service } from '../services/common1.service';
import { Person1 } from 'src/app/person1';
import { person3 } from 'src/app/person3';
import { Router } from '@angular/router';
import { Common2Service } from '../services/common2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  viewmode = "service";
  registerForm! :FormGroup;
  registerForm1!:FormGroup;
  submitted = false;
  submitted1 = false;
  isenable:boolean = false;
  people!: Person1[];
  people3!: person3[];
  person:any = new Person1();
  person3:any = new person3();
  message: any;

  constructor(private formBuilder: FormBuilder, private commonService:Common1Service,private common2Service:Common2Service, private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
    this.registerForm1 = this.formBuilder.group({
      username1: ['', [Validators.required, Validators.email]],
      password1: ['', Validators.required]
    });

    this.refreshPeople();
    this.refreshPeople1();
  }

  get f() { return this.registerForm.controls; }

  get f1() { return this.registerForm1.controls; }

  refreshPeople() {
    this.commonService.getAll()
      .subscribe(
        data => {
          this.people = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });    
 
  }

  refreshPeople1() {
    this.common2Service.getAll1()
      .subscribe(
        data => {
          this.people3 = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });      
 
  }

  addPerson(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    this.commonService.create(this.person).subscribe(response =>{
      console.log(response);
      this.route.navigate(['/nav','profile']);
    },
    (error : any) =>{
      console.log(error);
    });
  }

  addPerson1(){
    this.submitted1 = true;

    if(this.registerForm1.invalid){
      return;
    }

    this.common2Service.create1(this.person3).subscribe(response =>{
      console.log(response);
      this.route.navigate(['/navbar','profile1']);
    },
    (error : any) => {
      console.log(error);
    });
  }

  onSubmit() {
        

        // stop here if form is invalid
        

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
}
