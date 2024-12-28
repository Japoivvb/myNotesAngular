import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,CommonModule,EmployeeDetailComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @Input() emp:Employee;//passing data from parent to child
  @Input() idx:number;

  details = [];

  addDetail(detail: string) {
    this.details.push(detail);
  }


}
