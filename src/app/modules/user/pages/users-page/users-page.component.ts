import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.types';
import { FavoritesService } from 'src/app/modules/core/services/favorites.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { concatMap, exhaustMap, merge, mergeMap, Observable, Subject, switchMap, take, tap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { UserApiService } from '../../services/user-api.service';
import { SearchFieldComponent } from 'src/app/modules/shared/components/search-field/search-field.component';
import { PAGE_SIZE, PAGINATION_LIMIT, PAGINATION_OPTIONS } from '../../configs/pagination.config';

@Component({
    selector: 'app-user-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
    @ViewChild(SearchFieldComponent, { read: ElementRef })
    private searchField!: ElementRef;

    users: IUser[] = [];
    favoriteUsers: IUser[] = [];

    page: number = 1;
    pageSize: number = PAGE_SIZE;
    paginationLimit: number = PAGINATION_LIMIT;
    paginationOptions: number[] = PAGINATION_OPTIONS;

    searchText: string = '';
    
    userListController = new Subject<void>();
    exhaustUserListController = new Subject<void>();
    excelExportController = new Subject<string>();
    userExportController = new Subject<string>();

    constructor(
        private userService: UserService,
        private userApi: UserApiService,
        private favoritesService: FavoritesService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.userApi.getUsers(this.page, this.pageSize, this.searchText).pipe(
            mergeMap(users => {
                this.users = users;
                return this.userService.getFavoriteUsers(users);
            })
        ).subscribe((users) => {
            this.favoriteUsers = users;
        });


        this.userListController.asObservable().pipe(
            switchMap((v, index) => this.requestUserList().pipe(
                    tap(() => console.log(index))
                )
            )
        ).subscribe((users) => {
            this.users = users;
        });


        this.exhaustUserListController.asObservable().pipe(
            exhaustMap((v, index) => this.requestUserList().pipe(
                    tap(() => console.log(index))
                )
            )
        ).subscribe((users) => {
            this.users = users;
        });


        this.excelExportController.asObservable().pipe(
            tap(id => console.log(`Exporting excel from user with ID '${id}'...`)),
            mergeMap(id => this.userApi.getExcelByUserId(id))
        )
        .subscribe(message => {
            console.log(message);
        });
        

        this.userExportController.asObservable().pipe(
            concatMap(id => {
                console.log(`Exporting data about user with ID '${id}'...`);
                return this.userApi.getUserById(id);
            })
        ).subscribe(userData => {
            console.log(JSON.stringify(userData));
        });
    }

    onPageChange(page: PageEvent): void {
        this.page = page.pageIndex+1;
        this.pageSize = page.pageSize;
        
        this.refreshUserList();
        
        this.searchField.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    changeFavorite(user: IUser): void {
        this.favoritesService.toggleFavorites(FavoriteTypes.User, user.id)
        .pipe(take(1))
        .subscribe(userIds => {
            this.favoriteUsers = this.users.filter(user => {
                return userIds.includes(user.id);
            })
        });
    }

    findUsers(searchText: string): void {
        this.searchText = searchText;
        this.page = 1;
        this.pageSize = PAGE_SIZE;

        this.refreshUserList();
    }

    openEditorPage(id: string) {
        this.router.navigate(['edit-user', id]);
    }

    exportUserExcel(id: string) {
        this.excelExportController.next(id);
    }

    exportUser(id: string) {
        this.userExportController.next(id);
    }

    refreshUserList(): any {
        this.userListController.next();
    }

    exhaustRefreshUserList(): any {
        this.exhaustUserListController.next();
    }

    requestUserList(): Observable<IUser[]> {
        return this.userApi
            .getUsers(this.page, this.pageSize, this.searchText)
            .pipe(take(1))
    }
}
