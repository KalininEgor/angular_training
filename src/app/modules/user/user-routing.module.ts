import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';

import { UsersPageComponent } from './pages/users-page/users-page.component';


const routes: Routes = [
  {
    path: '',
    title: 'User list',
    component: UsersPageComponent
  },
  {
    path: 'add',
    title: 'Add new user',
    component: AddUserPageComponent
  },
  {
    path: 'edit/:id',
    title: 'Edit user',
    component: EditUserPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }