import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/modules/shared/services/authorization.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    currentUser!: string;

    constructor(private authService: AuthorizationService) {
        this.authService.authorizedUser.subscribe(user => {
            this.currentUser = user;
        });
    }
}
