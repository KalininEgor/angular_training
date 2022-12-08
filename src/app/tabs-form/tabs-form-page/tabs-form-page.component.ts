import { Component } from '@angular/core';

@Component({
  selector: 'tabs-form-page',
  templateUrl: './tabs-form-page.component.html',
  styleUrls: ['./tabs-form-page.component.scss']
})
export class TabsFormPageComponent{
  constructor() {}
  pageNumber: number = 1;
  dinamicContent: string = "Dinamic Content";
  changeCounter: number = 0;

  changeContent(text: string, $event: Event): void {
    $event.preventDefault();
    if (text) {
      this.dinamicContent = text
      this.changeCounter++;
    };
  }
}
