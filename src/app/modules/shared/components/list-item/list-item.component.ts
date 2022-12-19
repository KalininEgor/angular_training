import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IFavorite } from '../../models/favorite.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() mainInfo!: IFavorite;
  @Input() titleData!: string | number;
  @Input() imageUrl!: string;
  @Output() favoriteChanged = new EventEmitter<IFavorite>()
  isFavorite: boolean = false;
  changeFavorite() {
    this.isFavorite = !this.isFavorite;
    this.favoriteChanged.emit(this.mainInfo);
  }
}
