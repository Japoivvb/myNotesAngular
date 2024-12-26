import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';

// decorator
@Component({
  selector: 'app-employees',
  standalone: true,
  // adding employee inside this component
  imports: [RouterModule,EmployeeComponent,CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
// to be visible the component
export class EmployeesComponent {
  employees:Employee[]=[
    new Employee("Alan", "Arranz", 21, "Amazon"),
    new Employee("Biel", "Bonas", 22, "BMW"),
    new Employee("Cris", "Cruz", 23, "Celeritas")
];

  constructor(){
  }
}
