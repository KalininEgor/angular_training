import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/core/components/home-page/home-page.component';
import { LogInPageComponent } from './modules/authorization/pages/log-in-page/log-in-page.component';
import { SignUpPageComponent } from './modules/authorization/pages/sign-up-page/sign-up-page.component';
import { AuthAccessGuard } from './modules/core/guards/auth-access.guard';
import { AuthorizedUserWrapperComponent } from './modules/core/components/authorized-user-wrapper/authorized-user-wrapper.component';
import { UnauthorizedUserWrapperComponent } from './modules/core/components/unauthorized-user-wrapper/unauthorized-user-wrapper.component';
import { UnauthAccessGuard } from './modules/core/guards/unauth-access.guard';

const routes: Routes = [
    {
        path: '',
        component: AuthorizedUserWrapperComponent,
        canActivate: [AuthAccessGuard],
        children: [
            {
                path: '',
                title: 'Home',
                component: HomePageComponent
            },
            {
                path: 'users',
                title: 'User list',
                loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
                canLoad: [AuthAccessGuard], 
            },
            {
                path: 'cars',
                title: 'Car list',
                loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule),
                canLoad: [AuthAccessGuard], 
            },
        ]
    },
    {
        path: '',
        component: UnauthorizedUserWrapperComponent,
        canActivate: [UnauthAccessGuard],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            { 
                path: 'login', 
                title: 'Log in',
                component: LogInPageComponent 
            },
            { 
                path: 'signup',
                title: 'Sign up', 
                component: SignUpPageComponent 
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
