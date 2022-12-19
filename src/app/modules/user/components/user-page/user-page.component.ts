import { Component, OnInit } from '@angular/core';
import { IFavorite } from 'src/app/modules/shared/models/favorite.interface';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{
  users: IUser[] = [];
  favorite: IFavorite[] = []
  constructor(
    private userService: UserService,
    private favoritesService: FavoritesService
    ) {}
  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.favorite = this.favoritesService.getFavoriteList('users');
  }
  changeFavorite(item: IFavorite) {
    this.favorite = this.favoritesService.updateFavorite('users', item);
  }
}
