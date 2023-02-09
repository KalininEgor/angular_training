import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';

@Component({
    selector: 'app-user-table-client-page',
    templateUrl: './user-table-client-page.component.html',
    styleUrls: ['./user-table-client-page.component.scss'],
})
export class UserTableClientPageComponent implements OnInit {
    isLoading: boolean = true;
    dataSource: MatTableDataSource<IUser> = new MatTableDataSource();

    constructor(private userApi: UserApiService) {}

    ngOnInit(): void {
        this.userApi.getUsers(1, 1000).subscribe((users) => {
            this.dataSource.data = users;
            this.isLoading = false;
        });
    }

    initPaginator(paginator: MatPaginator): void {
        this.dataSource.paginator = paginator;
    }

    initSort(sort: MatSort): void {
        this.dataSource.sort = sort;
    }
}
