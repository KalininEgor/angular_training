import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/modules/authorization/services/authorization.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    title: string = 'angular_training';
    currentUser?: string;

    constructor(private authService: AuthorizationService, private router: Router) {
        this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    signOut(): void {
        this.authService.signOut();
        this.router.navigate(['login']);
    }
}
