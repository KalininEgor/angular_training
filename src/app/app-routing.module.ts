import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './modules/user/components/user-page/user-page.component';
import { CarPageComponent } from './modules/car/components/car-page/car-page.component';
import { UserFormPageComponent } from './modules/user/components/user-form-page/user-form-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserPageComponent },
  { path: 'user-form', component: UserFormPageComponent },
  { path: 'car', component: CarPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
