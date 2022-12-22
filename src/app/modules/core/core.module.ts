import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule, 
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        AppRoutingModule,
    ],
    exports: [HeaderComponent],
})
export class CoreModule {}
