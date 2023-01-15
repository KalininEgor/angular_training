import { Component, OnInit } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.types';
import { FavoritesService } from 'src/app/modules/core/services/favorites.service';
import { ICar } from '../../models/car.interface';
import { CarService } from '../../services/car.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-car-page',
    templateUrl: './car-page.component.html',
    styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
    cars: ICar[] = [];
    favoriteCars: ICar[] = [];
    subscribe: Subscription = new Subscription();

    constructor(
        private carService: CarService,
        private favoritesService: FavoritesService
    ) {}

    ngOnInit(): void {
        this.subscribe.add(this.carService.getCars().subscribe(cars => {
            this.cars = cars;
        }));

        this.subscribe.add(this.carService.getFavoriteCars().subscribe(cars => {
            this.favoriteCars = cars;
        }));
    }

    changeFavorite(car: ICar): void {
        this.favoritesService.toggleFavorites(
            FavoriteTypes.Car,
            car.id
        );

        this.subscribe.add(this.carService.getFavoriteCars().subscribe(cars => {
            this.favoriteCars = cars;
        }));
    }
}
