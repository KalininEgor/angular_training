import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() imgSrc!: string;
    @Input() isFavorite!: boolean;
    @Output() favoriteChanged = new EventEmitter();
    @Output() editClicked = new EventEmitter();

    changeFavorite(): void {
        this.favoriteChanged.emit();
    }

    onEditClick(): void {
        this.editClicked.emit();
    }
}
