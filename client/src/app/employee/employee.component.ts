import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '../employees.service';
import {Employee} from '../model/employee.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  displayedColumns = ['position', 'firstname', 'lastname', 'ssn', 'edit'];
  employees$: Observable<Employee[]>;

  constructor(private emplyeesService: EmployeesService) {
  }

  ngOnInit() {
    this.employees$ = this.emplyeesService.getEmployees().pipe<Employee[]>(
      map<Employee[], Employee[]>(emp => {
          emp.forEach((item, index) => (item as any).position = index)
          return emp;
        }
      ))

  }

}
