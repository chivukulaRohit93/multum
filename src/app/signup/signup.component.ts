import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Common3Service } from '../services/common3.service';
import { Person } from 'src/app/person';
import { Common4Service } from '../services/common4.service';
import { Person4 } from 'src/app/person4';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MustMatch } from 'src/app/services/mustmatch';
import * as moment from 'moment';

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
  usertype!:string;
  usertype1!:string;
 // message: any = '';
  
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private commonService:Common3Service,private common4Service:Common4Service, private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phoneNumber:['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      dob:['',Validators.required],
      zipCode:['',Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      userType:[{value: '', disabled:true}]

    }, {
      validator: MustMatch('password', 'confirmPassword')
  });

      this.registerForm1 = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailId: ['', [Validators.required, Validators.email]],
        password: ['',  [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        phoneNumber:['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]],
        dob:['',Validators.required],
        zipCode:['',Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
        userType:[{value: '', disabled:true}]
      }, {
        validator: MustMatch('password', 'confirmPassword')
    });

    this.usertype = "SERVICE_PROVIDER";
    this.usertype1 = "CUSTOMER";
    
  this.refreshPeople();
  this.refreshPeople1();
  }

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
    this.common4Service.getAll1()
    .subscribe(
      data => {
        this.people4 = data;
        console.log(data);
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
    this.registerForm.controls["userType"].setValue("SERVICE_PROVIDER");
    console.log(this.person.dob);
    const date = new Date(this.person.dob);
this.person.dob = moment(date).format('MM/DD/YYYY');

    this.commonService.create(this.person)
      .subscribe((Response: any) => {
           console.log(Response);

           this.route.navigate(['/nav','history']);
        
        },
      ( error: any) => {
          console.log(error);
          // this.message = error.error['message'];
          // console.log(this.message);

        });
    // this.message = '';   
  }

  addPerson1() {
    this.submitted1 = true;
    // stop here if form is invalid
    if (this.registerForm1.invalid) {
      return;
    }
    this.registerForm1.controls["userType"].setValue("CUSTOMER");
    const date = new Date(this.person4.dob);
    this.person4.dob = moment(date).format('MM/DD/YYYY');
    this.common4Service.create1(this.person4)
    .subscribe((Response: any) => {
      console.log(Response);
      this.route.navigate(['/navbar','myprofile']);
    },
    ( error: any) => {
      console.log(error);
      // this.message = error.error['message'];
      //     console.log(this.message);
      
    });
        
   // this.message = '';

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

