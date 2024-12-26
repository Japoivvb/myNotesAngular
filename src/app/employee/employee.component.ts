import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  name = "Juan";
  surname = "Diaz";
  age = 22;
  company = "Acc";
  departments: any[];

  companyName = false;
  registered = false;
  registerText = "there is no user registered";

  constructor() {
    this.departments = [
      { skill: 'Backend' },
      { skill: 'Frontend' },
      { skill: 'Fullstack' },
    ];
  }

  getDepartments(){     

  }

  updateCompany(value: string) {
    this.company = value;
  }

  showCompany() {
    alert(this.company)
  }

  getRegistered() {
    // data from ddbb
    this.registered = false
  }

  // event binding
  setRegistered(event: Event) {
    // data from ddbb
    if ((<HTMLInputElement>event.target).value == "true") {
      alert("the user has been registered");
      this.registerText = "the user has been registered";

    } else {
      this.registerText = "there is no user registered";

    }
  }

  register() {
    // alert("the user has been registered");  
    this.registerText = "the user has been updated";
    this.registered = true;
  }



  setCompany(event: Event) {
    // data from ddbb
    this.company = (<HTMLInputElement>event.target).value;
  }

  setName(event: Event) {
    // data from ddbb
    this.name = (<HTMLInputElement>event.target).value;
  }



}
