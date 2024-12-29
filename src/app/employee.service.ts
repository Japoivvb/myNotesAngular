import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    new Employee("Alan", "Arranz", 16, "Amazon"),
    new Employee("Biel", "Bonas", 22, "BMW"),
    new Employee("Cris", "Cruz", 23, "Celeritas")
  ];

  constructor() { }

  showMessage(message:string){
    alert(message);
  }

  addEmployee(employee:Employee){
    this.employees.push(employee);
  }

  getEmployees(){
    return this.employees;
  }
}
