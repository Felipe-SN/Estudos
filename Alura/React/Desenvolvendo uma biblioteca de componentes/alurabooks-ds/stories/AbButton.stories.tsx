import { AbButton } from '../src/components/AbButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

type TypeAbButton = typeof AbButton;

export default {
  title: 'components/AbButton',
  component: AbButton,
} as ComponentMeta<TypeAbButton>;

const Template: ComponentStory<TypeAbButton> = () => <AbButton />;

export const Primary = Template.bind({});
