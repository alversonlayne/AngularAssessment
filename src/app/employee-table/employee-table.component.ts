import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  title: 'Employee Table';

  employees = [
    {name: 'Jim Doe', title: 'Developer'},
    {name: 'Jane Smith', title: 'Developer'},
    {name: 'John Jay', title: 'Developer'},
    {name: 'Sarah Joy', title: 'Developer'},
    {name: 'Alex Smith', title: 'Developer'},
    {name: 'Dan Smith', title: 'Developer'},
    {name: 'David Albright', title: 'Lead Developer'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
