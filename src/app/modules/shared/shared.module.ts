import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';



@NgModule({
    declarations: [
        ListItemComponent,
        FavoriteListComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        ListItemComponent,
        FavoriteListComponent
    ]
})
export class SharedModule { }
