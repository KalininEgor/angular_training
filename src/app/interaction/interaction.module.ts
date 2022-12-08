import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionPageComponent } from './interaction-page/interaction-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InteractionPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InteractionModule { }
