import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
    @Input() users: IUser[] = [];
    @Input() favoriteUsers: IUser[] = [];
    @Output() favoriteChanged = new EventEmitter<IUser>();
    @Output() editClicked = new EventEmitter<string>();
    @Output() excelExportClicked = new EventEmitter<string>();
    @Output() userExportClicked = new EventEmitter<string>();
    @Output() detailsClicked = new EventEmitter<string>();

    changeFavorite(user: IUser): void {
        this.favoriteChanged.emit(user);
    }

    checkFavorite(user: IUser) {
        return !!this.favoriteUsers.find(favUser => favUser.id === user.id)
    }

    onEditClick(id: string): void {
        this.editClicked.emit(id);
    }

    onExcelExportClick(id: string): void {
        this.excelExportClicked.emit(id);
    }

    onUserExportClick(id: string): void {
        this.userExportClicked.emit(id);
    }
    
    onDetailsClick(id: string): void {
        this.detailsClicked.emit(id);
    }
}
