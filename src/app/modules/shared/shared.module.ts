import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CardComponent } from './components/card/card.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { ImageUploadInputComponent } from './components/image-upload-input/image-upload-input.component';
import { AddressFormListComponent } from './components/address-form-list/address-form-list.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';

@NgModule({
    declarations: [
        CardComponent,
        FavoriteListComponent,
        ValidationErrorComponent,
        ImageUploadInputComponent,
        AddressFormListComponent,
        AddressFormComponent,
        SearchFieldComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTooltipModule,
        MatPaginatorModule
    ],
    exports: [
        CardComponent,
        FavoriteListComponent,
        ValidationErrorComponent,
        ImageUploadInputComponent,
        AddressFormListComponent,
        SearchFieldComponent,
    ],
})
export class SharedModule {}
