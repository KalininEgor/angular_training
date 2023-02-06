import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.interface';
import { UserDetailsTransferService } from '../../services/user-details-transfer.service';

@Component({
    selector: 'app-details-personal',
    templateUrl: './details-personal.component.html',
    styleUrls: ['./details-personal.component.scss'],
})
export class DetailsPersonalComponent implements OnInit {
    user!: IUser;

    constructor(private userTransferService: UserDetailsTransferService) {}

    ngOnInit(): void {
        this.userTransferService.transferUser.subscribe(user => {
            this.user = user!;
        });
    }
}
