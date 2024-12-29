import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {
  @Output() detail = new EventEmitter<string>();

  constructor(private employeeService:EmployeeService) {
  }

  // to raise an event with the value the user types into the <input>.
  addDetail(value: string) {
    this.employeeService.showMessage("Detail:" + value)
    this.detail.emit(value);
  }

}
