import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../shared/services/authorization.service';

@Injectable({
    providedIn: 'root',
})
export class AuthAccessGuard implements CanActivate {
    constructor(
        private authService: AuthorizationService,
        private router: Router
    ) {}

    canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.authorizationStatus ? true : this.router.parseUrl('/login');  
    }
}
