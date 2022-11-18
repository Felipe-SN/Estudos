import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCard } from '../src/components/AbCard';

type TypeAbCard = typeof AbCard;

export default {
  title: 'components/AbCard',
  component: AbCard,
} as ComponentMeta<TypeAbCard>;

const Template: ComponentStory<TypeAbCard> = args => <AbCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Content will be showed here!',
};
