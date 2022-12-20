import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { CarPageComponent } from './components/car-page/car-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarListItemComponent } from './components/car-list-item/car-list-item.component';


@NgModule({
    declarations: [
        CarPageComponent,
        CarListComponent,
        CarListItemComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        FormsModule,
        SharedModule
    ]
})
export class CarModule { }
