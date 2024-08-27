import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

export default {
  title: 'componentes/MyInput',
  component: InputComponent,
} as Meta<InputComponent>;

export const Small: StoryObj<InputComponent> = {
  args: {
    inputSize: 'small',
  }
}

export const Medium: StoryObj<InputComponent> = {
  args: {
    inputSize: 'medium',
  }
}

export const Large: StoryObj<InputComponent> = {
  args: {
    inputSize: 'large',
  }
}
