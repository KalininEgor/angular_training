import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractionPageComponent } from './interaction/interaction-page/interaction-page.component';
import { TabsFormPageComponent } from './tabs-form/tabs-form-page/tabs-form-page.component';

const routes: Routes = [
  { path: '', redirectTo: "tabs-form", pathMatch: 'full' },
  { path: 'interaction', component: InteractionPageComponent },
  { path: 'tabs-form', component: TabsFormPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
