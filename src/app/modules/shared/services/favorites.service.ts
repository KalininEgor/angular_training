import { Injectable } from '@angular/core';
import { ICar } from '../../car/models/car.interface';
import { IUser } from '../../user/models/user.interface';
import { IFavorite } from '../models/favorite.interface';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  users: string[] = [];
  cars: string[] = [];

  favorite: { [key: string]: IFavorite[] } = {
    'users' : [],
    'cars' : []
  }

  constructor() { }

  getFavoriteList(list: string): IFavorite[] {
    return this.favorite[list]
  }
  updateFavorite(list: string, item: IFavorite) {
    if (this.favorite[list].includes(item)) {
      this.favorite[list] = this.favorite[list].filter(el => el != item)
    } else {
      this.favorite[list].push(item)
    }
    return this.favorite[list];
  }
}
