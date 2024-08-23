import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano = {
    infos: {
      type: 'Simples',
      price: 100
    }
  }
}
