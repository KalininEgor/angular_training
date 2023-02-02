import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/core/components/home-page/home-page.component';
import { LogInPageComponent } from './modules/authorization/pages/log-in-page/log-in-page.component';
import { SignUpPageComponent } from './modules/authorization/pages/sign-up-page/sign-up-page.component';
import { AuthAccessGuard } from './modules/core/guards/auth-access.guard';

const routes: Routes = [
    { 
        path: '', 
        component: HomePageComponent,
        title: 'Home', 
        canActivate: [AuthAccessGuard] 
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
    {
        path: 'users',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
        canActivate: [AuthAccessGuard],
    },
    {
        path: 'cars',
        title: 'Car list',
        loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule),
        canActivate: [AuthAccessGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
