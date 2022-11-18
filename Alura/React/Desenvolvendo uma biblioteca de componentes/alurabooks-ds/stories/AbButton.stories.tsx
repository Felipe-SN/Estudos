import { AbButton, ButtonProps } from '../src/components/AbButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

type TypeAbButton = typeof AbButton;

export default {
  title: 'components/AbButton',
  component: AbButton,
} as ComponentMeta<TypeAbButton>;

const Template: ComponentStory<TypeAbButton> = args => <AbButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Ab Button Primary',
  variantType: 'Primary',
} as ButtonProps;

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Ab Button Secondary',
  variantType: 'Secondary',
} as ButtonProps;
