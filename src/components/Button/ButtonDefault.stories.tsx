import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button as Component } from '.';
import StoryDefault from '../../styles/StoryDefault';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Component,
  args: {
    children: 'Button',
    onContrast: false,
    disabled: false,
  },
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const ButtonDefault: ComponentStory<typeof Component> = (args) => (
  <StoryDefault>
    <Component {...args} />
  </StoryDefault>
);
