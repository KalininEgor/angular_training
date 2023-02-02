import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../authorization/services/authorization.service';

@Injectable({
    providedIn: 'root',
})
export class AuthAccessGuard implements CanActivate {
    constructor(
        private authService: AuthorizationService,
        private router: Router
    ) {}

    canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAuthorized) {
            return true;
        } else {
            return this.router.parseUrl('/login');
        }
    }
}
