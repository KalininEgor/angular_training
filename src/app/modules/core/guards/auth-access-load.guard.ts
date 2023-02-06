import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../shared/services/authorization.service';

@Injectable({
    providedIn: 'root',
})
export class AuthAccessLoadGuard implements CanLoad {
    constructor(
      private authService: AuthorizationService,
      private router: Router
    ) {}

    canLoad(): Observable<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.authorizationStatus
            ? true
            : this.router.parseUrl('');
    }
}
