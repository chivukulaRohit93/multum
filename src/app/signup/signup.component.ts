import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Common3Service } from '../services/common3.service';
import { Person } from 'src/app/person';
import { Common4Service } from '../services/common4.service';
import { Person4 } from 'src/app/person4';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Output() formvalue = new EventEmitter();
 // message: any = '';
  
  constructor(private formBuilder: FormBuilder,private http:HttpClient, private actRoute: ActivatedRoute, private commonService:Common3Service,private common4Service:Common4Service, private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phoneNumber:['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      dob:['',Validators.required],
      homeAddress: this.formBuilder.group({
        zipCode: ['', [Validators.required]]
      }),
      acceptTerms: [false, Validators.requiredTrue],
      userType:['SERVICE_PROVIDER'],
      role: this.formBuilder.group({
        id: ['2']
      }),
    }, {
      validator: MustMatch('password', 'confirmPassword')
  });

      this.registerForm1 = this.formBuilder.group({
        id:[''],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailId: ['', [Validators.required, Validators.email]],
        password: ['',  [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        phoneNumber:['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]],
        dob:['',Validators.required],
        homeAddress: this.formBuilder.group({
          zipCode: ['', [Validators.required]]
        }),
        acceptTerms: [false, Validators.requiredTrue],
        userType:['CUSTOMER'],
        role: this.formBuilder.group({
          id: ['3']
        }),
      }, {
        validator: MustMatch('password', 'confirmPassword')
    });

    this.usertype = "SERVICE_PROVIDER";
    this.usertype1 = "CUSTOMER";
    
  this.refreshPeople();
  this.refreshPeople1();
  this.refreshpeople2();
  

  }

  refreshPeople() {
    this.commonService.getAll()
      .subscribe(
        data => {

          for(var i=0;i<=data.length;i++){
            if(data[i].homeAddress) {
              this.people = data[i];
              break;
            }
          }
          for(var i=0;i<=data.length;i++){
            if(data[i].role) {
              this.people = data[i];
              break;
            }
          }
          console.log(('people data'))
          console.log(this.people);
        },
        error => {
          console.log(error);
        });    
 
  }
  refreshPeople1() {
    this.common4Service.getAll1()
    .subscribe(
      data => {
        for(var i=0;i<=data.length;i++){
          if(data[i].homeAddress) {
            this.people4 = data[i];
            break;
          }
        }
        for(var i=0;i<=data.length;i++){
          if(data[i].role) {
            this.people4 = data[i];
            break;
          }
        }
        console.log(this.people4);
      },
      error => {
        console.log(error);
      });        
 
  }

  refreshpeople2(){
    this.common4Service.findById(this.actRoute.snapshot.params.id)
    .subscribe(
      (data: Person4) => {
        
        console.log(this.person4);
        this.person4 = data;
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
    console.log('form data');
    // this.registerForm.controls["userType"].setValue("SERVICE_PROVIDER");
    console.log(this.registerForm.value.dob);
    const date = new Date(this.registerForm.value.dob);
this.registerForm.value.dob = moment(date).format('MM/DD/YYYY');

    this.commonService.create(this.registerForm.value)
      .subscribe((Response: any) => {
           console.log(Response);
           console.log(this.registerForm.value);

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
    const date = new Date(this.registerForm1.value.dob);
    this.person4.dob = moment(date).format('MM/DD/YYYY');
    this.common4Service.create1(this.registerForm1.value)
    .subscribe((Response: any) => {
      console.log(Response);
      this.formvalue.emit(this.registerForm1.value);
      this.route.navigate(['/navbar','profile1']);
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

