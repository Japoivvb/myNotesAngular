import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {
  @Output() detail = new EventEmitter<string>();

  // to raise an event with the value the user types into the <input>.
  addDetail(value: string) {
    this.detail.emit(value);
  }

}
