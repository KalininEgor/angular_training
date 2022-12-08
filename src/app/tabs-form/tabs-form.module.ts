import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsFormPageComponent } from './tabs-form-page/tabs-form-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TabsFormPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TabsFormModule { }
