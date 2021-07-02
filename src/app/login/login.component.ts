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
  isenable:boolean = false;
  people!: Person1[];
  people3!: person3[];
  person:any = new Person1();
  person3:any = new person3();

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
    this.commonService.getPeople()
      .subscribe(data => {
        console.log(data);
        this.people=data;
      });      
 
  }

  refreshPeople1() {
    this.common2Service.getPeople1()
      .subscribe(data => {
        console.log(data);
        this.people3=data;
      });      
 
  }
 
  addPerson() {
    this.commonService.addPerson(this.person)
      .subscribe(data => {
        console.log(data);
        this.refreshPeople();
      });      

      this.submitted = true;

      if (this.registerForm.invalid) {
        return;
    }
    this.route.navigate(['/nav','profile']);
    
  }

  addPerson1(){
    this.common2Service.addPerson1(this.person3)
      .subscribe(data => {
        console.log(data);
        this.refreshPeople1();
      });      

      this.submitted = true;

      if (this.registerForm1.invalid) {
        return;
    }
    this.route.navigate(['/navbar','profile1']);
    
  }

    onSubmit() {
        

        // stop here if form is invalid
        

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
}
