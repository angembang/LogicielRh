import { Component, EventEmitter, Output } from '@angular/core';
import {Employee } from '../models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  @Output () add = new EventEmitter<Employee>();

  // Temporary object type with the Employee interface
  newEmployee: Employee = {
    id:0,
    name: '',
    post: '',
    actif: true
  };

  submitForm() {
    // Send object to the parent
    this.add.emit(this.newEmployee);
    // Reseet the form
    this.newEmployee = {
      id: 0,
      name: '',
      post: '',
      actif: true
    }
  }
}
