import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFavorite } from 'src/app/modules/shared/models/favorite.interface';
import { ICar } from '../../models/car.interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  @Input() cars: ICar[] = [];
  @Output() favoriteChanged = new EventEmitter<IFavorite>();
  changeFavorite(item: IFavorite) {
    this.favoriteChanged.emit(item)
  }
}
