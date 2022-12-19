import { Component, OnInit } from '@angular/core';
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
  favoriteUsers: IUser[] = []
  constructor(
    private userService: UserService,
    private favoritesService: FavoritesService
    ) {}
  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.favoriteUsers = this.favoritesService.getFavoriteUsers();
  }
  changeFavorite(item: IUser) {
    this.favoriteUsers = this.favoritesService.updateFavoriteUsers(item);
  }
}
