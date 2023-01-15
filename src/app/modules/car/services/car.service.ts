import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, mergeMap, Observable, of } from 'rxjs';
import { FavoritesService } from '../../core/services/favorites.service';
import { FavoriteTypes } from '../../shared/models/favorite.types';
import { cars } from '../mocks/cars';
import { ICar } from '../models/car.interface';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    carsSbj = new BehaviorSubject<ICar[]>(cars);
    cars$ = this.carsSbj.asObservable();

    constructor(private favoriteService: FavoritesService) {}
    
    getCars(): Observable<ICar[]> {
        return this.cars$.pipe(delay(700));
    }

    getFavoriteCars(): Observable<ICar[]> {
        return this.cars$.pipe(
            mergeMap(cars => {
                return this.favoriteService.getFavorites(FavoriteTypes.Car)
                    .pipe(
                        map(favorites => {
                            return cars.filter(car => favorites.includes(car.id))
                        })
                    );
            })
        );
    }
}
