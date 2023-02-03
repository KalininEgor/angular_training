import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-unauthorized-user-header',
    templateUrl: './unauthorized-user-header.component.html',
    styleUrls: ['./unauthorized-user-header.component.scss'],
})
export class UnauthorizedUserHeaderComponent {
    @Input() title!: string;
}
