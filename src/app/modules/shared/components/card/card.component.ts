import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() imgSrc!: string;
    @Output() favoriteChanged = new EventEmitter();
    @Input() isFavorite!: boolean;

    changeFavorite() {
        this.favoriteChanged.emit();
    }
}
