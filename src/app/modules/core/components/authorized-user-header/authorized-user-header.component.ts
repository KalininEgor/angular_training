import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthorizationService } from 'src/app/modules/shared/services/authorization.service';

@Component({
    selector: 'app-authorized-user-header',
    templateUrl: './authorized-user-header.component.html',
    styleUrls: ['./authorized-user-header.component.scss'],
})
export class AuthorizedUserHeaderComponent {
    currentUser!: string;
    destroyed: Subject<void> = new Subject();

    constructor(private authService: AuthorizationService, private router: Router) {
        this.authService.authorizedUser
        .pipe(
            takeUntil(this.destroyed)
        )
        .subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnDestroy(): void {
        this.destroyed.next();
    }

    signOut(): void {
        this.authService.signOut();
        this.router.navigate(['login']);
    }
}
