import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from '../../models/car.interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  @Input() cars: ICar[] = [];
  @Input() favoriteCars: ICar[] = [];
  @Output() favoriteChanged = new EventEmitter<ICar>();
  changeFavorite(item: ICar) {
    this.favoriteChanged.emit(item)
  }
}
