import { Component, OnInit } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.types';
import { FavoritesService } from 'src/app/modules/core/services/favorites.service';
import { ICar } from '../../models/car.interface';
import { CarService } from '../../services/car.service';

@Component({
    selector: 'app-car-page',
    templateUrl: './car-page.component.html',
    styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
    cars: ICar[] = [];
    favoriteIds: number[] = [];
    favoriteCars: ICar[] = [];

    constructor(
        private carService: CarService,
        private favoritesService: FavoritesService
    ) {}

    ngOnInit(): void {
        this.cars = this.carService.getCars();
        this.favoriteIds = this.favoritesService.getFavorites(FavoriteTypes.Car);
        this.favoriteCars = this.carService.getFavoriteCars();
    }

    changeFavorite(car: ICar): void {
        this.favoriteIds = this.favoritesService.toggleFavorites(FavoriteTypes.Car, car.id);
        this.favoriteCars = this.carService.getFavoriteCars();
    }
}
