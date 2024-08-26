import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  propTest: boolean = false;
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('onButonClick');

    this.buttonClickEmitter.emit(this.propTest)
  }
}
