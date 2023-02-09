import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SortOrder } from 'src/app/modules/shared/models/sort-order.type';
import { UserApiService } from '../../services/user-api.service';
import { UsersDataSource } from '../../services/users-data-source';

@Component({
    selector: 'app-user-table-server-page',
    templateUrl: './user-table-server-page.component.html',
    styleUrls: ['./user-table-server-page.component.scss'],
})
export class UserTableServerPageComponent implements OnInit {
    
    sortField?: string;
    sortOrder?: SortOrder;

    dataSource!: UsersDataSource;
    paginator!: MatPaginator;
    sort!: MatSort;

    constructor(private userApi: UserApiService) {}

    ngOnInit(): void {
        this.dataSource = new UsersDataSource(this.userApi);
        this.dataSource.loadUsers(1, 10);
    }

    loadUsers(): void {
        this.dataSource.loadUsers(
            this.paginator.pageIndex+1,
            this.paginator.pageSize,
            undefined,
            this.sortField,
            this.sortOrder
        );
    }

    initPaginator(paginator: MatPaginator): void {
        this.paginator = paginator;

        this.paginator.page.subscribe(() => {
            this.loadUsers();
        });
    }

    initSort(sort: MatSort): void {
        this.sort = sort;

        this.sort.sortChange.subscribe(activeSort => {
            this.sortField = activeSort.active;
            this.sortOrder = activeSort.direction;
            this.loadUsers();            
        });
    }
}