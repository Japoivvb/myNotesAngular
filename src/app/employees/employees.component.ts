import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

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
  
  employees: Employee[] = [];

  constructor(private employeeService:EmployeeService) {
    // this.employees = this.employeeService.getEmployees();
    this.employeeService.getEmployees().subscribe({
      next: (result) => {
        this.employees = Object.keys(result).map((key) => {
          const employeeData = result[key];
          const employee = new Employee(
            employeeData.name,
            employeeData.surname,
            employeeData.age,
            employeeData.company
          );
          employee.id = key; // Assign the Firebase key as the `id`
          return employee;
        });
        // console.log('Transformed employees:', this.employees);
      },
     error:(error) =>{
       console.error(error)
     }
   })
  }

  addEmployee() {
     let employee= new Employee(this.formName,this.formSurname, this.formAge, this.formCompany);
     //this.employees.push(employee); moved to service
     //  this.employeeService.addEmployee(employee);
     this.employees.push(employee);
     this.employeeService.addEmployee(employee).subscribe({
       next:(result) =>{
         console.log(result)
         // to show confirmation message
         this.employeeService.showMessage("Name: " + employee.name);
      },
      error:(error) =>{
        console.error(error)
      }
    })
  }

  updateEmployee() {
    //TODO
  }
}
