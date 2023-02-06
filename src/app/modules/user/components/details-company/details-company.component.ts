import { Component } from '@angular/core';
import { IUser } from '../../models/user.interface';
import { UserDetailsTransferService } from '../../services/user-details-transfer.service';

@Component({
    selector: 'app-details-company',
    templateUrl: './details-company.component.html',
    styleUrls: ['./details-company.component.scss'],
})
export class DetailsCompanyComponent {
    user!: IUser;

    constructor(private userTransferService: UserDetailsTransferService) {}

    ngOnInit(): void {
        this.userTransferService.transferUser.subscribe(user => {
            this.user = user!;
        });
    }
}
