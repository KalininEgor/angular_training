import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';
import { UserDetailsTransferService } from '../../services/user-details-transfer.service';

@Component({
    selector: 'app-user-details-page',
    templateUrl: './user-details-page.component.html',
    styleUrls: ['./user-details-page.component.scss'],
})
export class UserDetailsPageComponent implements OnInit {
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
    ];

    constructor(
        private route: ActivatedRoute,
        private userService: UserApiService,
        private userTransferService: UserDetailsTransferService 
    ) {}

    ngOnInit(): void {
        this.route.params
        .pipe(
            mergeMap(params => {
                return this.userService.getUserById(params['id']);
            })
        )
        .subscribe(user => {
            this.user = user; 
            this.userTransferService.updateTransferUser(user);
        });
    }
}
