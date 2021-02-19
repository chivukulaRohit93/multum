import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Person } from 'src/app/person';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  viewmode = "service";
  registerForm!: FormGroup;
    submitted = false;
    people!: Person[];
  person:any = new Person();
  

  constructor(private formBuilder: FormBuilder,public commonService:CommonService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone:['',Validators.required],
      dateofbirth:['',Validators.required],
      zipcode:['',Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  });

  this.refreshPeople();
    
  }

  refreshPeople() {
    this.commonService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })      
 
  }
 
  addPerson() {
    this.commonService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })      
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
      
      

      this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    

    


}
