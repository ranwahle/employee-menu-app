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


  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`employee/${id}`)
  }

  save(employee: Employee) : Observable<any> {
    if (employee.id) {
     return this.http.put(`employee/${employee.id}`, employee);
    } else {
      return this.http.post(`employee`, employee);
    }
  }

  deleteEmployee(employee: Employee): Observable<any> {
    return this.http.delete(`employee/${employee.id}`);
  }
}
