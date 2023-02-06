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
    @Output() editClicked = new EventEmitter();
    @Output() excelExportClicked = new EventEmitter();
    @Output() userExportClicked = new EventEmitter();
    @Output() detailsClicked = new EventEmitter();

    changeFavorite(): void {
        this.favoriteChanged.emit();
    }

    onEditClick(): void {
        this.editClicked.emit();
    }

    onExcelExportClick(): void {
        this.excelExportClicked.emit();
    }

    onUserExportClick(): void {
        this.userExportClicked.emit();
    }

    onDetailsClick(): void {
        this.detailsClicked.emit();
    }
}
