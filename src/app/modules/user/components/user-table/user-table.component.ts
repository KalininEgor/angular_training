import { DataSource } from '@angular/cdk/table';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IUser } from '../../models/user.interface';

@Component({
    selector: 'app-user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements AfterViewInit {
    @Input() dataSource!: DataSource<IUser>;
    @Output() paginatorInited: EventEmitter<MatPaginator> = new EventEmitter();
    @Output() sortInited: EventEmitter<MatSort> = new EventEmitter();

    @ViewChild('paginator') paginator!: MatPaginator;
    @ViewChild('sort') sort!: MatSort;

    displayedColumns: string[] = [
        'fullName',
        'age',
        'department',
        'email',
        'addresses',
    ];

    ngAfterViewInit(): void {
        this.paginatorInited.emit(this.paginator);
        this.sortInited.emit(this.sort);
    }
}
