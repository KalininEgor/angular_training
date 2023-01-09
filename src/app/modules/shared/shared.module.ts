import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CardComponent } from './components/card/card.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { ImageUploadInputComponent } from './components/image-upload-input/image-upload-input.component';
import { AddressesFormComponent } from './components/addresses-form/addresses-form.component';

@NgModule({
    declarations: [
        CardComponent,
        FavoriteListComponent,
        ValidationErrorComponent,
        ImageUploadInputComponent,
        AddressesFormComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTooltipModule
    ],
    exports: [
        CardComponent,
        FavoriteListComponent,
        ValidationErrorComponent,
        ImageUploadInputComponent,
        AddressesFormComponent,
    ],
})
export class SharedModule {}
