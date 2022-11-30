import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTag, AbTagProps } from '../src/components/AbTag';

type TagType = typeof AbTag;

export default {
  title: 'components/AbTag',
  component: AbTag,
} as ComponentMeta<TagType>;

const Template: ComponentStory<TagType> = args => <AbTag {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Tag Name',
} as AbTagProps;
