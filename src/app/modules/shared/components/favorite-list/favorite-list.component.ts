import { Component, Input } from '@angular/core';
import { IFavorite } from '../../models/favorite.interface';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent {
  @Input() favoriteItems!: IFavorite[];
  @Input() title!: string;
}
