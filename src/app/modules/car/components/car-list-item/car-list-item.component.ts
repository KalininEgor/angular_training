import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICar } from '../../models/car.interface';

@Component({
    selector: 'app-car-list-item',
    templateUrl: './car-list-item.component.html',
    styleUrls: ['./car-list-item.component.scss'],
})
export class CarListItemComponent {
    @Input() car!: ICar;
    @Input() isFavorite!: boolean;
    @Output() favoriteChanged = new EventEmitter();

    changeFavorite(): void {
        this.favoriteChanged.emit();
    }
}
