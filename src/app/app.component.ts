import { Component, OnInit } from '@angular/core';
import { EmpRestService } from './emp-rest.service';
import { Employees } from '../app/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'E-Risk Angular Assessment';

  constructor(private rs: EmpRestService) { }

  columns = ['Employee Name', 'Job Title'];
  index = ['Name', 'Title'];

  employees: Employees[] = [];

  ngOnInit(): void {
    this.rs.getEmployees().subscribe
      (
        (response) => {
          this.employees = response;
        },
        (error) => console.log(error)
      );
  }

}
