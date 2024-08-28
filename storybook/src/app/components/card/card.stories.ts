import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'Componentes/MyCard',
  component: CardComponent,
} as Meta<CardComponent>;

export const Purple: StoryObj<CardComponent> = {
  args: {
    cardStyle: 'purple',
  }
}

export const Orange: StoryObj<CardComponent> = {
  args: {
    cardStyle: 'orange',
  }
}

export const Blue: StoryObj<CardComponent> = {
  args: {
    cardStyle: 'blue',
    planType: "",
    planPrice: 0
  }
}
