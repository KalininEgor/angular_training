import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './modules/user/pages/users-page/users-page.component';
import { CarPageComponent } from './modules/car/pages/car-page/car-page.component';
import { AddUserPageComponent } from './modules/user/pages/add-user-page/add-user-page.component';
import { EditUserPageComponent } from './modules/user/pages/edit-user-page/edit-user-page.component';
import { ExitAboutGuard } from './modules/core/guards/exitAbout.guard';

const routes: Routes = [
    { path: '', 
        redirectTo: 'users', 
        pathMatch: 'full'
    },
    { path: 'users', component: UsersPageComponent },
    { path: 'add-user', component: AddUserPageComponent },
    {
        path: 'edit-user/:id',
        component: EditUserPageComponent,
        canDeactivate: [ExitAboutGuard],
    },
    { path: 'cars', component: CarPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
