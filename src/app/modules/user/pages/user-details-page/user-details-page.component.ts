import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user.interface';

@Component({
    selector: 'app-user-details-page',
    templateUrl: './user-details-page.component.html',
    styleUrls: ['./user-details-page.component.scss'],
})
export class UserDetailsPageComponent implements OnInit {
    id!: string;
    user!: IUser;

    navLinks = [
        {
            label: 'Personal Info',
            link: 'personal-info'    
        },
        {
            label: 'Company Info',
            link: 'company-info'
        },
        {
            label: 'Contacts',
            link: 'contacts'
        },
    ]

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.data.subscribe(routeData => {
            this.user = routeData['user'];
        });
    }
}
