import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  plan1 = {
    type: 'Simples',
    price: 100,
  }

  plan2 = {
    type: 'Completo',
    price: 200,
  }

  onCardButtonClicked() {
    console.log('onCardButtonClicked')
    //chamada HTTP
  }
}
