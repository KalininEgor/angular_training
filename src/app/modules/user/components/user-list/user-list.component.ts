import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFavorite } from 'src/app/modules/shared/models/favorite.interface';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: IUser[] = [];
  @Output() favoriteChanged = new EventEmitter<IFavorite>();
  changeFavorite(item: IFavorite) {
    this.favoriteChanged.emit(item)
  }
}
