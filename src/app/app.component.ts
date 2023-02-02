import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'angular_training';

    constructor(private router: Router, private titleService: Title) {}

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter((event) => {
                    return event instanceof NavigationEnd;
                })
            )
            .subscribe(() => {
                setTimeout(() => {
                    console.log(`Page was changed to '${this.titleService.getTitle()}'`);
                }, 0);
            });
    }
}
