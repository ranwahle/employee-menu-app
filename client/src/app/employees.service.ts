import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './model/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {

  }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>('employees')
  }


}
