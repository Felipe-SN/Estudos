import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {
  AbOptionGroup,
  OptionGroupProps,
} from '../src/components/AbOptionGroup';

type TypeAbOptionGroup = typeof AbOptionGroup;

export default {
  title: 'components/AbOptionGroup',
  component: AbOptionGroup,
} as ComponentMeta<TypeAbOptionGroup>;

const Template: ComponentStory<TypeAbOptionGroup> = args => (
  <AbOptionGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      id: 1,
      title: 'E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      title: 'Impresso',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      title: 'Impresso + E-book',
      body: 'R$ 00,00',
      footer: '.pdf, .epub, .mob',
    },
  ],
} as OptionGroupProps;
