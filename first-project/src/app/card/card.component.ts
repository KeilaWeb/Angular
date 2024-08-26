import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) planPrice: number = 0;

  private _planType: string = ''; //propriedade privada que guarda o valor final

  @Input('planType') //plantype é vinculado no comp. pai
  set planType(value: string) { //criação do set vinculado ao @Input (plantype não é o mesmo que _planType)
    this._planType = value.toUpperCase();
  }

  get planType(): string { //retorna o valor do _planType
    return this._planType;
  }

  buttonClicked(valueEmited: boolean) {
    console.log('buttonClicked', valueEmited)
    console.log('planType', this.planType) //chama o valor aqui
  }
}
