import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';

import { HttpClientModule } from '@angular/common/http';  
  
import { ReactiveFormsModule } from "@angular/forms";  
import { EmployeeService } from './service/employee.service';
import { CreateEmpComponent } from './create-emp/create-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ListEmpComponent,
    CreateEmpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule  

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Employee {  
    id?: number;  
    employee_name?: string;  
    employee_salary?: number;  
    employee_age?: number;  
}  
