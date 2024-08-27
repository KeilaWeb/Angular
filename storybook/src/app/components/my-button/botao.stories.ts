import { Meta, StoryObj } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';

export default {
  title: 'Componentes/MyButton',
  component: MyButtonComponent,
} as Meta<MyButtonComponent>;

export const Primary: StoryObj<MyButtonComponent> = {
  args: {
    label: 'Botão Primário',
    style: 'primary'
  },
};

export const Secondary: StoryObj<MyButtonComponent> = {
  args: {
    label: 'Botão Secundário',
    style: 'secondary'
  },
};
