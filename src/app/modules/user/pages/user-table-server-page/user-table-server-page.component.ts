import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserApiService } from '../../services/user-api.service';
import { UsersDataSource } from '../../services/users-data-source';

@Component({
    selector: 'app-user-table-server-page',
    templateUrl: './user-table-server-page.component.html',
    styleUrls: ['./user-table-server-page.component.scss'],
})
export class UserTableServerPageComponent implements OnInit {
    
    dataSource!: UsersDataSource;
    paginator!: MatPaginator;
    sort!: MatSort;

    constructor(private userApi: UserApiService) {}

    ngOnInit(): void {
        this.dataSource = new UsersDataSource(this.userApi);
        this.dataSource.loadUsers(1, 10);
    }

    initPaginator(paginator: MatPaginator): void {
        this.paginator = paginator;

        this.paginator.page.subscribe(() => {
            this.dataSource.loadUsers(
                this.paginator.pageIndex+1,
                this.paginator.pageSize
            );
        });
    }

    initSort(sort: MatSort): void {
        this.sort = sort;

        this.sort.sortChange.subscribe(activeSort => {
            this.dataSource.loadUsers(
                this.paginator.pageIndex+1,
                this.paginator.pageSize,
                undefined,
                activeSort.active,
                activeSort.direction
            );
        });
    }
}