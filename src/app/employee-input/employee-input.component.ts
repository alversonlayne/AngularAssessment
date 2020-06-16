import { Component, OnInit } from '@angular/core';
import { Employees } from '../employee';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.css']
})
export class EmployeeInputComponent implements OnInit {

  model = new Employees();

  submitted = false;

  onSubmit() {this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
