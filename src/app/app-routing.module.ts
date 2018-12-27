import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmintLoginComponent } from './admint-login/admint-login.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

const routes: Routes = [
  {path:'admin/login',component:AdmintLoginComponent},
  {path:'admin/singup',component:AdminSignupComponent},
  {path:'student/detail',component:StudentDetailComponent},
  {path:'student/login',component:StudentLoginComponent},
  {path:'student/update',component:StudentUpdateComponent},
  {path:' ',redirectTo:'admin/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
