import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) { }  
  baseUrl1: string = 'https://jsonplaceholder.typicode.com/users';  
  baseUrl2: string = 'https://jsonplaceholder.typicode.com/users';  
  baseUrl: string = 'https://jsonplaceholder.typicode.com/comments';  
  getEmployees() {  
    return this.http.get<Employee[]>(this.baseUrl1);  
  }  
  deleteEmployees(id: number) {  
    return this.http.delete<Employee[]>(this.baseUrl1 + id);  
  }  
  addEmp(employee: Employee) {  
    return this.http.post(this.baseUrl2, employee);  
   }  
   getEmployeeById(id: number) {  
     return this.http.get<Employee>(this.baseUrl + '/' + id);  
   }  
   updateEmployee(employee: Employee) {  
     return this.http.put(this.baseUrl + '/' + employee.id, employee);  
   }  
}