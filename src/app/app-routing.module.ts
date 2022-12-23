import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './modules/user/pages/user-page/user-page.component';
import { CarPageComponent } from './modules/car/pages/car-page/car-page.component';
import { UserFormPageComponent } from './modules/user/pages/user-form-page/user-form-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserPageComponent },
  { path: 'user-form', component: UserFormPageComponent },
  { path: 'cars', component: CarPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
