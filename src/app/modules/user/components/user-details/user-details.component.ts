import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { UserDetailsPart } from '../../models/user-details-part.type';
import { IUser } from '../../models/user.interface';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
    user!: IUser;
    detailsPart!: UserDetailsPart;
    destroyed: Subject<void> = new Subject();

    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void {
        this.route.parent?.data
        .pipe(take(1))
        .subscribe((routeData) => {
            this.user = routeData['user'];
        });

        this.route.data
        .pipe(takeUntil(this.destroyed))
        .subscribe(routeData => {
            this.detailsPart = routeData['detailsPart'];
        });
    }

    ngOnDestroy(): void {
        this.destroyed.next();
    }
}
