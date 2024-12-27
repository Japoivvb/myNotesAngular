import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// decorator
@Component({
  selector: 'app-employees',
  standalone: true,
  // adding employee inside this component
  imports: [RouterModule, EmployeeComponent, CommonModule, FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
// to be visible the component
export class EmployeesComponent {
  
  formName: string = "";
  formAge: number = 0;
  formSurname: string = "";
  formCompany: string = "";
  
  employees: Employee[] = [
    new Employee("Alan", "Arranz", 21, "Amazon"),
    new Employee("Biel", "Bonas", 22, "BMW"),
    new Employee("Cris", "Cruz", 23, "Celeritas")
  ];
  
  constructor() {
  }

  addEmployee() {
     let employee= new Employee(this.formName,this.formSurname, this.formAge, this.formCompany);
     this.employees.push(employee);
  }
}
