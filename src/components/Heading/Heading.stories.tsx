import Heading from './Heading';
import type { HeadingProps } from './Heading';
import type { Meta, Story } from '@storybook/react/types-6-0';

export default {
  component: Heading,
  title: 'Components/Heading',
} as Meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const Default = Template.bind({});

export const WithName = Template.bind({});
WithName.args = {
  name: 'Bob',
};
