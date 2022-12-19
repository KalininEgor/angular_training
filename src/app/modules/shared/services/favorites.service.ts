import { Injectable } from '@angular/core';
import { ICar } from '../../car/models/car.interface';
import { IUser } from '../../user/models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteCars: ICar[] = [];
  favoriteUsers: IUser[] = [];


  constructor() { }

  getFavoriteCars(): ICar[] {
    return this.favoriteCars
  }
  getFavoriteUsers(): IUser[] {
    return this.favoriteUsers
  }
  updateFavoriteCars(item: ICar): ICar[] {
    if (this.favoriteCars.includes(item)) {
      this.favoriteCars = this.favoriteCars.filter(el => el != item)
    } else {
      this.favoriteCars.push(item)
    }
    return this.favoriteCars
  }

  updateFavoriteUsers(item: IUser): IUser[] {
    if (this.favoriteUsers.includes(item)) {
      this.favoriteUsers = this.favoriteUsers.filter(el => el != item)
    } else {
      this.favoriteUsers.push(item)
    }
    return this.favoriteUsers
  }
}
