import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    new Employee("Alan", "Arranz", 16, "Amazon"),
    new Employee("Biel", "Bonas", 22, "BMW"),
    new Employee("Cris", "Cruz", 23, "Celeritas")
  ];

  constructor(private httpClient:HttpClient ) {}

  showMessage(message:string){
    alert(message);
  }

  addEmployee(employee:Employee):Observable<any> {
    this.employees.push(employee);
    return this.httpClient.post("https://myfirstangular-c52e8-default-rtdb.europe-west1.firebasedatabase.app/employees.json", employee, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });  
  }


  addEmployees(employees:Employee[]){
    this.httpClient.post("https://myfirstangular-c52e8-default-rtdb.europe-west1.firebasedatabase.app//employees.json",employees,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' })});

  }

  getEmployees(){
    return this.employees;
  }
}
