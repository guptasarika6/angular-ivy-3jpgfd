import { Component, VERSION } from '@angular/core';
import * as employeeData from './assets/employee.json';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

interface Employee {
  id: Number;
  first_name: String;
  last_name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  employeeForm: FormGroup;
  searchText = '';
  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      id: '',
      first_name: '',
      last_name: '',
      gender: '',
      email: '',
    });
  }

  employees: Employee[] = employeeData;

  onSubmit() {
    employeeData.concat(this.employeeForm.value);
  }
}
