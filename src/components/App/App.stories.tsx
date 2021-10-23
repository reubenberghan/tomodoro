import App from './App';
import type { Meta } from '@storybook/react/types-6-0';

export default {
  component: App,
  title: 'Components/App',
} as Meta;

export const Default = (): JSX.Element => <App />;
