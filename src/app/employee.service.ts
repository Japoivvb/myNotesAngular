import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  constructor(private httpClient:HttpClient ) {}

  showMessage(message:string){
    alert(message);
  }

  addEmployee(employee:Employee):Observable<any> {    
    return this.httpClient.post("https://myfirstangular-c52e8-default-rtdb.europe-west1.firebasedatabase.app/employees.json", employee, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });  
  }

  updateEmployee(employee:Employee):Observable<any> { 
    //TODO   
    return this.httpClient.patch("https://myfirstangular-c52e8-default-rtdb.europe-west1.firebasedatabase.app/employees/-OFR7RUg3zaxRJYiPDvb.json", employee, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });  
  }
  
  getEmployees():Observable<Array<Employee>>{
    return this.httpClient.get<Array<Employee>>("https://myfirstangular-c52e8-default-rtdb.europe-west1.firebasedatabase.app/employees.json",{ headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
    // return this.employees;
  }
}
