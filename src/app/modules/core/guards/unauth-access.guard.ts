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
export class UnauthAccessGuard implements CanActivate {
    constructor(
        private authService: AuthorizationService,
        private router: Router
    ) {}

    canActivate(): Observable<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.authorizationStatus) {
            return this.router.parseUrl('');
        } else {
            return true;
        }
    }
}
