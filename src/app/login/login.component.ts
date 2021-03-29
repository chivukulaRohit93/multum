import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Common1Service } from '../services/common1.service';
import { Person1 } from 'src/app/person1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  viewmode = "service";
  registerForm!: FormGroup;
  registerForm1!:FormGroup;
    submitted = false;
    isenable:boolean = false;
    people!: Person1[];
    person:any = new Person1();

  constructor(private formBuilder: FormBuilder,private commonService:Common1Service, private route:Router) { }

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
  }

  get f() { return this.registerForm.controls; }

  refreshPeople() {
    this.commonService.getPeople()
      .subscribe(data => {
        console.log(data);
        this.people=data;
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
    this.commonService.addPerson(this.person)
      .subscribe(data => {
        console.log(data);
        this.refreshPeople();
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
