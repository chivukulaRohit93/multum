import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  viewmode = "service";
  registerForm!: FormGroup;
    submitted = false;
    isenable:boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });   
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.isenable = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
}
