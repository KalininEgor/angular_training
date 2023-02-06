import { Component } from '@angular/core';
import { IUser } from '../../models/user.interface';
import { UserDetailsTransferService } from '../../services/user-details-transfer.service';

@Component({
    selector: 'app-details-contacts',
    templateUrl: './details-contacts.component.html',
    styleUrls: ['./details-contacts.component.scss'],
})
export class DetailsContactsComponent {
    user!: IUser;

    constructor(private userTransferService: UserDetailsTransferService) {}

    ngOnInit(): void {
        this.userTransferService.transferUser.subscribe(user => {
            this.user = user!;
        });
    }
}
