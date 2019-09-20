import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  empformlabel: string = 'Add Employee';
  empformbtn: string = 'Save';

  addForm = new FormGroup({
    id: new FormControl(),
    fname: new FormControl(),
    email: new FormControl(),
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private empService: EmployeeService) {
  }

  
  btnvisibility: boolean = true;
  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      employee_name: ['', Validators.required],
      employee_email: ['', [Validators.required, Validators.maxLength(9)]],
    });

    let empid = localStorage.getItem('editEmpId');
    if (+empid > 0) {
      this.empService.getEmployeeById(+empid).subscribe(data => {
        this.addForm.patchValue(data);
      })
      this.btnvisibility = false;
      this.empformlabel = 'Edit Employee';
      this.empformbtn = 'Update';
    }
  }
  onSubmit() {
    console.log('Employee added sucess');
    this.empService.addEmp(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-emp']);
      },
        error => {
          alert(error);
        });
  }
  
  register() {
    console.log("user register successfully");
    console.log(this.addForm.value);


  }

}
