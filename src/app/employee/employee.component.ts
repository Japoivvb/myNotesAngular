import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  name = "Juan";
  surname = "Diaz";
  age = 22;
  company = "Acc";

  companyName = false;
  registered = false;
  registerText = "there is no user registered";

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

  setRegistered(event: Event) {
    // data from ddbb
    if ((<HTMLInputElement>event.target).value=="true") {
      alert("the user has been registered");
      this.registerText = "the user has been registered";

    } else {
      this.registerText = "there is no user registered";

    }
  }
  setCompany(event: Event) {
    // data from ddbb
    this.company = (<HTMLInputElement>event.target).value;
  }

}
