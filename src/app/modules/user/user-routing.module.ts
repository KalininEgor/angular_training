import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExitAboutGuard } from '../core/guards/exit-about.guard';
import { DetailsCompanyComponent } from './components/details-company/details-company.component';
import { DetailsContactsComponent } from './components/details-contacts/details-contacts.component';
import { DetailsPersonalComponent } from './components/details-personal/details-personal.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';

import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
    {
        path: '',
        title: 'User list',
        component: UsersPageComponent,
    },
    {
        path: 'add',
        title: 'Add new user',
        component: AddUserPageComponent,
    },
    {
        path: 'edit/:id',
        title: 'Edit user',
        component: EditUserPageComponent,
        canDeactivate: [ExitAboutGuard],
    },
    {
        path: 'details/:id',
        title: 'User details',
        component: UserDetailsPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'personal-info'
            },
            {
                path: 'personal-info',
                component: DetailsPersonalComponent
            },
            {
                path: 'company-info',
                component: DetailsCompanyComponent
            },
            {
                path: 'contacts',
                component: DetailsContactsComponent
            },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
