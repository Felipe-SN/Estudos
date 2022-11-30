import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbInputField, InputFieldProps } from '../src/components/AbInputField';
import React from 'react';

type InputField = typeof AbInputField;

export default {
  title: 'components/AbInputField',
  component: AbInputField,
} as ComponentMeta<InputField>;

const Template: ComponentStory<InputField> = args => <AbInputField {...args} />;

export const email = Template.bind({});

email.args = {
  inputID: 'email001',
  type: 'email',
  inputPlaceholder: 'seuemail@maneiro.com.br',
  label: 'E-mail',
} as InputFieldProps;

export const password = Template.bind({});

password.args = {
  inputID: 'pw001',
  type: 'password',
  inputPlaceholder: '********',
  label: 'Senha',
} as InputFieldProps;
