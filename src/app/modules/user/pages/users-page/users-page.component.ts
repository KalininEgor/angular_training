import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.types';
import { FavoritesService } from 'src/app/modules/core/services/favorites.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { UserApiService } from '../../services/user-api.service';
import { SearchFieldComponent } from 'src/app/modules/shared/components/search-field/search-field.component';

@Component({
    selector: 'app-user-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
    @ViewChild(SearchFieldComponent, {read: ElementRef}) 
    private searchField!: ElementRef;

    users: IUser[] = [];
    favoriteUsers: IUser[] = [];

    constructor(
        private userService: UserService,
        private userApi: UserApiService,
        private favoritesService: FavoritesService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.userApi.getUsers().pipe(take(1)).subscribe(users => {
            this.users = users;
        }); 

        this.userService.getFavoriteUsers().pipe(take(1)).subscribe(users => {
            this.favoriteUsers = users;
        });
    }

    onPageChange(page: PageEvent) {
        this.userApi.getUsers(page.pageIndex+1, page.pageSize).pipe(take(1)).subscribe(users => {
            this.users = users;
        });
        this.searchField.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
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
        this.userApi.getUsersByName(searchText).pipe(take(1)).subscribe(users => {
            this.users = users;
        });
    }

    openEditorPage(id: number) {
        this.router.navigate(['edit-user', id]);
    }
}
