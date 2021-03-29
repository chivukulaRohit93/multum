import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Person } from 'src/app/person';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  viewmode = "service";
  registerForm!: FormGroup;
  registerForm1!: FormGroup;
  submitted = false;
  people!: Person[];
  person:any = new Person();

  
  constructor(private formBuilder: FormBuilder,private commonService:CommonService, private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
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

      this.registerForm1 = this.formBuilder.group({
        firstName1: ['', Validators.required],
        lastName1: ['', Validators.required],
        email1: ['', [Validators.required, Validators.email]],
        password1: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword1: ['', Validators.required],
        phone1:['',Validators.required],
        zipcode1:['',Validators.required],
        acceptTerms1: [false, Validators.requiredTrue],
        privacy: [false, Validators.requiredTrue]
  });

  this.refreshPeople();
    
  }

  refreshPeople() {
    this.commonService.getPeople()
      .subscribe(data => {
        console.log(data);
        this.people=data;
      });      
 
  }
 
  addPerson() {
    this.commonService.addPerson(this.person)
      .subscribe((data: any) => {
        console.log(data);
        this.refreshPeople();
      });      

      this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.route.navigate(['/nav','history']);
        
  }

  addPerson1() {
    this.commonService.addPerson(this.person)
      .subscribe((data: any) => {
        console.log(data);
        this.refreshPeople();
      });      

      this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm1.invalid) {
            return;
        }
        
        this.route.navigate(['/navbar','myprofile']);
        
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
      
      

      

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    

    


}


