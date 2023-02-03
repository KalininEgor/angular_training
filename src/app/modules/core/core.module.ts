import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogComponent } from './components/dialog/dialog.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthorizedUserWrapperComponent } from './components/authorized-user-wrapper/authorized-user-wrapper.component';
import { UnauthorizedUserWrapperComponent } from './components/unauthorized-user-wrapper/unauthorized-user-wrapper.component';
import { AuthorizedUserHeaderComponent } from './components/authorized-user-header/authorized-user-header.component';
import { UnauthorizedUserHeaderComponent } from './components/unauthorized-user-header/unauthorized-user-header.component';

@NgModule({
    declarations: [DialogComponent, HomePageComponent, AuthorizedUserWrapperComponent, UnauthorizedUserWrapperComponent, AuthorizedUserHeaderComponent, UnauthorizedUserHeaderComponent],
    imports: [
        CommonModule, 
        AppRoutingModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatDialogModule,
    ],
})
export class CoreModule {}
