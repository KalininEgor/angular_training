import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [HeaderComponent, DialogComponent],
    imports: [
        CommonModule, 
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        AppRoutingModule,
        MatDialogModule
    ],
    exports: [HeaderComponent],
})
export class CoreModule {}
