import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  template: `
    <button class="click" [class]="{
      'click--primary': style === 'primary' ? true : false,
      'click--secondary': style === 'secondary' ? true : false,
      }">{{ label }}</button>
    `,
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent {
  @Input() label!: string;
  @Input()
  style: 'primary' | 'secondary' = 'primary'
}
