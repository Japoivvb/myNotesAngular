import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, EmployeeDetailComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @Input() emp: Employee;//passing data from parent to child
  @Input() idx: number;

  details = [];

  constructor(private employeeService: EmployeeService) {}

  addDetail(detail: string) {
    this.details.push(detail);
  }

  updateEmployee(): void {
    console.log(this.emp);
    const newName = window.prompt(
      `Update name`
    );
    if (newName && newName.trim() !== '') {
      this.emp.name = newName.trim();
      this.employeeService.updateEmployee(this.emp).subscribe({
        next: () => {
          console.log(`Employee name updated to: ${newName}`);
          alert(`Employee name updated to: ${newName}`);
        },
        error: (err) => {
          console.error('Error updating employee name:', err);
          alert('Failed to update employee name.');
        },
      });
    }
  }




}
