import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  name = "Juan";
  surname = "Diaz";
  age = 22;
  company = "IBM";

  companyName=false;
  registered=false;

  updateCompany(value: string) {
  }

  getRegistered() {
    // data from ddbb
    this.registered=true
  }

}
