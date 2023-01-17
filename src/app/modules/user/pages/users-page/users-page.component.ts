import { Component, OnDestroy, OnInit } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.types';
import { FavoritesService } from 'src/app/modules/core/services/favorites.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
    users: IUser[] = [];
    favoriteUsers: IUser[] = [];
    subscribe: Subscription = new Subscription();

    constructor(
        private userService: UserService,
        private favoritesService: FavoritesService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.subscribe.add(this.userService.getUsers().subscribe(users => {
            this.users = users;
        }));

        this.subscribe.add(this.userService.getFavoriteUsers().subscribe(users => {
            this.favoriteUsers = users;
        }))
    }
    
    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }

    changeFavorite(user: IUser): void {
        this.favoritesService.toggleFavorites(
            FavoriteTypes.User,
            user.id
        );
        
        this.subscribe.add(this.userService.getFavoriteUsers().subscribe(users => {
            this.favoriteUsers = users;
        }));
    }

    findUsers(searchText: string): void {
        this.userService.findUsers(searchText).subscribe(users => {
            this.users = users;
        });
    }

    openEditorPage(id: number) {
        this.router.navigate(['edit-user', id]);
    }
}
