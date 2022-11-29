import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  AbInputCounter,
  InputCounterProps,
} from '../src/components/AbInputCounter';
import React from 'react';

type TypeAbInputCounter = typeof AbInputCounter;

export default {
  title: 'components/AbInputCounter',
  component: AbInputCounter,
} as ComponentMeta<TypeAbInputCounter>;

const Template: ComponentStory<TypeAbInputCounter> = args => (
  <AbInputCounter {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Quantidade',
} as InputCounterProps;
