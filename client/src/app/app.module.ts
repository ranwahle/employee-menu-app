import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BaseUrlInterceptorService} from './base-url-interceptor.service';
import {NavbarComponent} from './navbar/navbar.component';
import {MatDialogModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AreYouSureComponent} from './are-you-sure/are-you-sure.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuItemsComponent } from './menu-items/menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    EditEmployeeComponent,
    AreYouSureComponent,
    MenuItemsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptorService, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [AreYouSureComponent]
})
export class AppModule {
}
