import { Injectable } from '@angular/core';
import { FavoritesService } from '../../core/services/favorites.service';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { cars } from '../mocks/cars';
import { ICar } from '../models/car.interface';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(
        private favoriteService: FavoritesService
    ) {}
    
    getCars(): ICar[] {
        return cars;
    }

    getFavoriteCars(): ICar[] {
        const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.Car);
        return this.getCars().filter(car => {
            return favoriteIds.includes(car.id);  
        })
    }
}
