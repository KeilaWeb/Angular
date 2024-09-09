import { Meta, StoryObj } from '@storybook/angular';
import { NotificationComponent } from './notification.component';

// Exporta a configuração padrão do Storybook para o componente Notification
export default {
  title: 'Components/Notification',
  component: NotificationComponent, // Especifica qual componente está sendo configurado
  // Configura as propriedades do componente que podem ser ajustadas no painel
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'error', 'info']
      }
    }
  }
} as Meta<NotificationComponent>;

// Define um template para criar histórias do componente Notification
// Define o template para as histórias do componente Notification
const Template: StoryObj<NotificationComponent> = {
    args: {
      message: '',
      type: 'info'
    }
};

// Cria a história para o tipo de notificação 'success'
export const Success = {
    ...Template,
    args: {
      message: 'This is a success message!',
      type: 'success'
    }
  };

// Cria a história para o tipo de notificação 'error'
export const Error = {
    ...Template,
    args: {
      message: 'This is an error message!',
      type: 'error'
    }
};

// Cria a história para o tipo de notificação 'info'
export const Info = {
    ...Template,
    args: {
      message: 'This is an info message!',
      type: 'info'
    }
};