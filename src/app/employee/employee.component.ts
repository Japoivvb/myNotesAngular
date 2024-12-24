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

  companyName = false;
  registered = false;
  registerText = "there is no user registered";

  updateCompany(value: string) {
  }

  getRegistered() {
    // data from ddbb
    this.registered = false
  }

  setRegistered(event: Event) {
    // data from ddbb
    if ((<HTMLInputElement>event.target).value=="true") {
      alert("the user has been registered");
      this.registerText = "the user has been registered";

    } else {
      this.registerText = "there is no user registered";

    }
  }

}
