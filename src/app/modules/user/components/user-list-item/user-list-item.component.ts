import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent {
    @Input() user!: IUser;
    @Input() isFavorite!: boolean;
    @Output() favoriteChanged = new EventEmitter();

    changeFavorite(): void {
        this.favoriteChanged.emit();
    }
}
