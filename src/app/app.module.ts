import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpserviceService} from './httpservice.service';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdmintLoginComponent } from './admint-login/admint-login.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentUpdateComponent } from './student-update/student-update.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminSignupComponent,
    AdmintLoginComponent,
    StudentDetailComponent,
    StudentLoginComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
