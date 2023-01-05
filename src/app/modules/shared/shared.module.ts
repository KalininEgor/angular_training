import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
    declarations: [
        CardComponent,
        FavoriteListComponent,
        ValidationErrorComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    exports: [
        CardComponent,
        FavoriteListComponent,
        ValidationErrorComponent
    ]
})
export class SharedModule { }
