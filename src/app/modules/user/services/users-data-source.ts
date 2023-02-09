import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, map, Observable, take } from "rxjs";
import { SortOrder } from "../../shared/models/sort-order.type";
import { IUser } from "../models/user.interface";
import { sortUsersByAlphabet, sortUsersByDigits } from "../utils/users-sort.util";
import { UserApiService } from "./user-api.service";

export class UsersDataSource implements DataSource<IUser> {
    private usersSubject = new BehaviorSubject<IUser[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private userApi: UserApiService) {}

    connect(): Observable<IUser[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(): void {
        this.usersSubject.complete();
    }

    loadUsers(
        page: number,
        pageSize: number,
        search?: string,
        sortField?: string,
        sortOrder?: SortOrder,
    ): void {
        this.loadingSubject.next(true);

        this.userApi
            .getUsers(
                page, 
                pageSize, 
                search, 
                sortField, 
                sortOrder
            )
            .pipe(
                take(1),
                map((users) => {
                    if (!sortOrder || !sortField) return users;
                
                    if (sortField === 'age') return sortUsersByDigits(users, sortField, sortOrder);

                    return sortUsersByAlphabet(users, sortField, sortOrder);
                })
            )
            .subscribe((users) => {
                this.usersSubject.next(users);
                this.loadingSubject.next(false);
            });
    }
}