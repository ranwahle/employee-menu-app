import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BaseUrlInterceptorService} from './base-url-interceptor.service';
import {NavbarComponent} from './navbar/navbar.component';
import {MatTableModule, MatToolbarModule} from '@angular/material';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
