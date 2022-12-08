import { Component } from '@angular/core';

@Component({
  selector: 'interaction-page',
  templateUrl: './interaction-page.component.html',
  styleUrls: ['./interaction-page.component.scss']
})
export class InteractionPageComponent {
  pageNumber: number = 2;
  sliderValue: number = 0;
  checkboxOptions: {name: string, checked: boolean, color: string}[] = [
    {name: 'Value with Primary color', checked: false, color: 'primary'},
    {name: 'Value with Accent color', checked: true, color: 'accent'},
    {name: 'Value with Warn color', checked: false, color: 'warn'},
  ];
}
