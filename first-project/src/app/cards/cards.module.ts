import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardPurpleComponent } from '../card-purple/card-purple.component';
import { CardPurpleButtonComponent } from '../card-purple-button/card-purple-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardPurpleComponent,
    CardButtonComponent,
    CardPurpleButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    // CardButtonComponent,
    CardPurpleComponent,
    CardButtonComponent,
    // CardPurpleButtonComponent
  ]
})
export class CardsModule { }
