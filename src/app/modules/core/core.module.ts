import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './components/header/header.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
    declarations: [HeaderComponent, DialogComponent, HomePageComponent],
    imports: [
        CommonModule, 
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatDialogModule,
    ],
    exports: [HeaderComponent],
})
export class CoreModule {}
