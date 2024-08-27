import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() planType: string = '';
  @Input() planPrice: number = 0;

  @Input()
  cardStyle: 'orange' | 'purple' | 'blue' = 'orange';
}
