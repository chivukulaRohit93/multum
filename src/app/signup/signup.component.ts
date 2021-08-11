import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Common3Service } from '../services/common3.service';
import { Person } from 'src/app/person';
import { Common4Service } from '../services/common4.service';
import { Person4 } from 'src/app/person4';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MustMatch } from 'src/app/services/mustmatch';

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
  submitted1 = false;
  value:boolean = true;
  people!: Person[];
  person:any = new Person();
  people4!: Person4[];
  person4:any = new Person4();
  message: any = '';
  
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private commonService:Common3Service,private common4Service:Common4Service, private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone:['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      dateofbirth:['',Validators.required],
      zipcode:['',Validators.required],
      acceptTerms: [false, Validators.requiredTrue]

    }, {
      validator: MustMatch('password', 'confirmPassword')
  });

      this.registerForm1 = this.formBuilder.group({
        firstName1: ['', Validators.required],
        lastName1: ['', Validators.required],
        email1: ['', [Validators.required, Validators.email]],
        password1: ['',  [Validators.required, Validators.minLength(6)]],
        confirmPassword1: ['', Validators.required],
        phone1:['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]],
        zipcode1:['',Validators.required],
        acceptTerms1: [false, Validators.requiredTrue],
        privacy: [false, Validators.requiredTrue]
      }, {
        validator: MustMatch('password1', 'confirmPassword1')
    });

  this.refreshPeople();
  this.refreshPeople1();
  }

  refreshPeople() {
    this.commonService.getAll()
      .subscribe(
        data => {
          this.people = data;
          console.log(data.message);
        },
        error => {
          console.log(error.message);
        });    
 
  }
  refreshPeople1() {
    this.common4Service.getAll1()
    .subscribe(
      data => {
        this.people4 = data;
        console.log(data.message);
      },
      error => {
        console.log(error);
      });        
 
  }
 
  addPerson() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.commonService.create(this.person)
      .subscribe((Response: any) => {
           console.log(Response);
           this.route.navigate(['/nav','history']);
        
        },
      ( error: any) => {
          console.log(error.error['message']);
          this.message = error.error['message'];
          console.log(this.message);
        //  this.submitted = false;
        });
     this.message = '';   
  }

  addPerson1() {
    this.submitted1 = true;
    // stop here if form is invalid
    if (this.registerForm1.invalid) {
      return;
    }
    this.common4Service.create1(this.person4)
    .subscribe((Response: any) => {
      console.log(Response);
      this.route.navigate(['/navbar','myprofile']);
    },
    ( error: any) => {
      console.log(error);
      this.message = error.error['message'];
          console.log(this.message);
          this.submitted1 = false;
    });
        
    this.message = '';
  }
  
  // usernameValidator(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     return this.commonService.checkIfUsernameExists(control.value).pipe(
  //       map(res => {
  //         // if res is true, username exists, return true
  //         return res ? { usernameExists: true } : null;
  //         // NB: Return null if there is no error
  //       })
  //     );
  //   };
  // }

  get f(): { [key: string]: AbstractControl } { return this.registerForm.controls; }

  get f1(): { [key: string]: AbstractControl } { return this.registerForm1.controls; }


}

