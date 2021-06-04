import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as SearchBox, SearchBoxProps } from './SearchBox';

export default {
  title: 'Custom/SearchBox',
  component: SearchBox,
  argTypes: {
  },
} as Meta;

const Template: Story<SearchBoxProps> = (args) => <SearchBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClickSearch: keyword => alert(keyword)
};
