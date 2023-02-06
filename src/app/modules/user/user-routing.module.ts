import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExitAboutGuard } from '../core/guards/exitAbout.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserDetailsPart } from './models/user-details-part.type';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';

import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserResloverService } from './services/user-reslover.service';

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
        resolve: {
            user: UserResloverService
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'personal-info'
            },
            {
                path: 'personal-info',
                component: UserDetailsComponent,
                data: { detailsPart: 'personal' as UserDetailsPart }
            },
            {
                path: 'company-info',
                component: UserDetailsComponent,
                data: { detailsPart: 'company' as UserDetailsPart }
            },
            {
                path: 'contacts',
                component: UserDetailsComponent,
                data: { detailsPart: 'contacts' as UserDetailsPart }
            },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
