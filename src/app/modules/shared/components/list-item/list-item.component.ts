import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
    @Input() imgSrc!: string;
    @Output() favoriteChanged = new EventEmitter();
    @Input() isFavorite!: boolean;

    changeFavorite() {
        this.favoriteChanged.emit();
    }
}
