import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CoreModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AuthorizationModule,
        MatSelectModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
