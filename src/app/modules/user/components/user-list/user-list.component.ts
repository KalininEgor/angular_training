import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
    @Input() users: IUser[] = [];
    @Input() favoriteIds: number[] = [];
    @Output() favoriteChanged = new EventEmitter<IUser>();
    @Output() editClicked = new EventEmitter<number>();

    changeFavorite(user: IUser): void {
        this.favoriteChanged.emit(user);
    }

    onEditClick(id: number): void {
        this.editClicked.emit(id);
    }
}
