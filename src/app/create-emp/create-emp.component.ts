import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private empService: EmployeeService, private router: Router,) { }

  
  
  ngOnInit() {
    this.loginForm  = new FormGroup({

      name: new FormControl(),
      email: new FormControl()
    });

  }

  login(){
    console.log(this.loginForm.value);
  }

}
