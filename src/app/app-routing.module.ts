import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './modules/user/pages/user-page/user-page.component';
import { CarPageComponent } from './modules/car/pages/car-page/car-page.component';
import { AddUserPageComponent } from './modules/user/pages/add-user-page/add-user-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserPageComponent },
  { path: 'add-user', component: AddUserPageComponent },
  { path: 'cars', component: CarPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
