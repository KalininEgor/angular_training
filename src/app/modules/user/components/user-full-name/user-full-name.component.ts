import { Component, Input } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
    selector: 'app-user-full-name',
    templateUrl: './user-full-name.component.html',
    styleUrls: ['./user-full-name.component.scss'],
})
export class UserFullNameComponent {
    @Input() user!: IUser;
}
