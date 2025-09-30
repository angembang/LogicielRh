import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  @Input () employee!: Employee;
  @Output () toggle = new EventEmitter<Employee>();

  // Methode to change the status
  changeStatus() {
    this.toggle.emit(this.employee);
  }

}
