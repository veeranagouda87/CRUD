import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../app.module';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  employees: Employee[];  
  
  constructor(private empService: EmployeeService, private router: Router, ) { }  
  
  ngOnInit() {  
    this.empService.getEmployees()  
      .subscribe((data: Employee[]) => {  
        this.employees = data;  
      });  
  }  
  deleteEmp(employee: Employee): void {  
    this.empService.deleteEmployees(employee.id)  
      .subscribe(data => {  
        this.employees = this.employees.filter(u => u !== employee);  
      })  
  }  
  editEmp(employee: Employee): void {  
    localStorage.removeItem('editEmpId');  
    localStorage.setItem('editEmpId', employee.id.toString());  
    this.router.navigate(['list-emp']);  
  }  
}  
