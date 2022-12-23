import { Component, OnInit } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.types';
import { FavoritesService } from 'src/app/modules/core/services/favorites.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit{
    users: IUser[] = [];
    favoriteIds: number[] = [];
    favoriteUsers: IUser[] = [];

    constructor(
        private userService: UserService,
        private favoritesService: FavoritesService
    ) {}

    ngOnInit(): void {
        this.users = this.userService.getUsers();
        this.favoriteIds = this.favoritesService.getFavorites(FavoriteTypes.User);
        this.favoriteUsers = this.userService.getFavoriteUsers();
    }

    changeFavorite(user: IUser): void {
        this.favoriteIds = this.favoritesService.toggleFavorites(FavoriteTypes.User, user.id);
        this.favoriteUsers = this.userService.getFavoriteUsers();

    }
}
