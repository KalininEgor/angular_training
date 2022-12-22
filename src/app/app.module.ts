import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { CarModule } from './modules/car/car.module';
import { CoreModule } from './modules/core/core.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        UserModule,
        CarModule,
        MatSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
