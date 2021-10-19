import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person4 } from 'src/app/person4';
import { Common4Service } from 'src/app/services/common4.service';

@Component({
  selector: 'app-service-profile-edit',
  templateUrl: './service-profile-edit.component.html',
  styleUrls: ['./service-profile-edit.component.css']
})
export class ServiceProfileEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  employeeData: any = {};


  @Input() Person4: any;

  constructor(private common4Service: Common4Service, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.common4Service.findById(this.id)
    .subscribe(
      (data: Person4) => {
        this.employeeData = data;
      },
      error => {
        console.log(error);
      });    
  }

  update() {
    // console.log(this.registerForm1.value);
    console.log('update called');
    console.log(this.Person4);
      this.common4Service.update(this.id, this.employeeData).subscribe(data => {
        console.log(this.employeeData);
        this.router.navigate(['/nav','profile1']);
      });
    
  }

}
