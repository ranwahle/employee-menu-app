import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {EmployeesService} from '../employees.service';
import {first} from 'rxjs/operators';
import {Employee} from '../model/employee.interface';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit, OnDestroy {

  subscriptions: Subscription;
  employee: Employee;
  addOrEdit = 'Add';

  constructor(private activatedRoute: ActivatedRoute, private employeesService: EmployeesService, private router: Router) {
  }

  ngOnInit() {
    this.subscriptions = this.activatedRoute.params.subscribe(params => {
      const id = +params.id;

      if (id && !isNaN(id) && id > 0) {
        this.employeesService.getEmployeeById(id).pipe(first()).subscribe(res => {
          this.employee = res
          this.addOrEdit = res ? 'Edit' : 'Add';

        })
      } else {
        this.employee = {firstName: '', lastName: '', id: undefined, ssn: undefined}
      }

    })
  }

  saveEmployee() {
    console.log('saving', this.employee)
    this.employeesService.save(this.employee).subscribe(result => {
      this.router.navigate(['/employees'])
    });
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}
