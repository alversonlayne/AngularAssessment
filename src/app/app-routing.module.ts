import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'Employees', component: EmployeeTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
