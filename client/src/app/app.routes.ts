import {Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';

export const routes: Routes = [{
  path: 'employees',
  component: EmployeeComponent
}, {
  path: 'edit-employee/:id',
  component: EditEmployeeComponent,
}, {
  path: 'menu-items',
  component: MenuItemsComponent
}]
