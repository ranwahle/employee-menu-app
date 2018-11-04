import {Component, OnInit} from '@angular/core';
import {EmployeesService} from '../employees.service';
import {Employee} from '../model/employee.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {AreYouSureComponent} from '../are-you-sure/are-you-sure.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  displayedColumns = ['position', 'firstname', 'lastname', 'ssn', 'edit'];
  employees$: Observable<Employee[]>;

  constructor(private emplyeesService: EmployeesService, private dialog: MatDialog) {
  }

  deleteEmployee(employee: Employee) {
    const dialogRef =  this.dialog.open(AreYouSureComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.emplyeesService.deleteEmployee(employee).subscribe(() => {
          this.getEmployees();
        });
      }
    })
  }

  ngOnInit() {
    this.getEmployees();

  }

  private getEmployees() {
    this.employees$ = this.emplyeesService.getEmployees().pipe<Employee[]>(
      map<Employee[], Employee[]>(emp => {
          emp.forEach((item, index) => (item as any).position = index)
          return emp;
        }
      ))
  }
}
