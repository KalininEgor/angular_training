import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../models/favorite.types';

export type FavoriteStore = { [key in FavoriteTypes]: number[] };

@Injectable({
    providedIn: 'root'
})
export class FavoritesService {
  
    store: FavoriteStore = {
        [FavoriteTypes.User]: [],
        [FavoriteTypes.Car]: []
    }

    getFavorites(type: FavoriteTypes): number[] {
        return this.store[type];
    }

    toggleFavorites(type: FavoriteTypes, id: number): number[] {
        const index = this.store[type].indexOf(id);

        if (index === -1) {
            this.store[type].push(id);
        } else {
            this.store[type].splice(index, 1);
        }

        return this.store[type];
    }
}
