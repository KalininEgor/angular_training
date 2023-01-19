import { Component, OnInit } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.types';
import { FavoritesService } from 'src/app/modules/core/services/favorites.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-user-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
    users: IUser[] = [];
    favoriteUsers: IUser[] = [];
    usersLength!: number;

    constructor(
        private userService: UserService,
        private favoritesService: FavoritesService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.userService.getUsers().pipe(take(1)).subscribe(users => {
            this.users = users.slice(0, 10);
            this.usersLength = users.length; 
        }); 

        this.userService.getFavoriteUsers().pipe(take(1)).subscribe(users => {
            this.favoriteUsers = users;
        });
    }

    onPageChange(page: PageEvent) {
        const startIndex = page.pageIndex*page.pageSize;
        this.userService.getUsers().pipe(take(1)).subscribe(users => {
            this.users = users.slice(startIndex, startIndex+10);
            this.usersLength = users.length; 
        }); 
    }

    changeFavorite(user: IUser): void {
        this.favoritesService.toggleFavorites(
            FavoriteTypes.User,
            user.id
        );
        
        this.userService.getFavoriteUsers().pipe(take(1)).subscribe(users => {
            this.favoriteUsers = users;
        });
    }

    findUsers(searchText: string): void {
        this.userService.findUsers(searchText).pipe(take(1)).subscribe(users => {
            this.users = users;
        });
    }

    openEditorPage(id: number) {
        this.router.navigate(['edit-user', id]);
    }
}
