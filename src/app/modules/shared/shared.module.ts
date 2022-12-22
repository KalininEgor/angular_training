import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        ListItemComponent,
        FavoriteListComponent,
        FormComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
    ],
    exports: [
        ListItemComponent,
        FavoriteListComponent,
        FormComponent
    ]
})
export class SharedModule { }
