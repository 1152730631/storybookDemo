import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text1 = () => <Button onClick={action('clicked')}>组件1</Button>;
export const Text2 = () => <Button onClick={action('clicked')}>组件2</Button>;
export const Text3 = () => <Button onClick={action('clicked')}>组件3</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
