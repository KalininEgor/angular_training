import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICar } from 'src/app/modules/car/models/car.interface';
import { IUser } from 'src/app/modules/user/models/user.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item!: ICar | IUser;
  @Output() favoriteChanged = new EventEmitter()
  @Input() isFavorite!: boolean;
  changeFavorite() {
    this.isFavorite = !this.isFavorite;
    this.favoriteChanged.emit(this.item);
  }
}
