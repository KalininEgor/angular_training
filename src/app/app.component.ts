import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    destroyed: Subject<void> = new Subject()

    constructor(private router: Router, private titleService: Title) {}
   
    ngOnInit(): void {
        this.router.events
            .pipe(
                filter((event) => {
                    return event instanceof NavigationEnd;
                }),
                takeUntil(this.destroyed)
            )
            .subscribe(() => {
                setTimeout(() => {
                    console.log(`Page was changed to '${this.titleService.getTitle()}'`);
                }, 0);
            });
    }

    ngOnDestroy(): void {
        this.destroyed.next();
    }
}
