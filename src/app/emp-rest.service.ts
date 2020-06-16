import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from '../assets/Employeessss';


@Injectable({
  providedIn: 'root'
})
export class EmpRestService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/Employees/';

  getEmployees() {
    return this.http.get<Employees[]>(this.url);
  }
}
