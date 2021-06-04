import React from 'react';
import { Story, Meta } from '@storybook/react';

import { default as SearchableTable, SearchableTableProps } from './SearchableTable';

export default {
  title: 'Custom/SearchableTable',
  component: SearchableTable,
  argTypes: {
  },
} as Meta;

const Template: Story<SearchableTableProps> = (args) => <SearchableTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
