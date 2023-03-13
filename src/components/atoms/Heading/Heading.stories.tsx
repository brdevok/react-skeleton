import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeadingMockCopy, HeadingMockData } from './Heading.mocks';
import Heading from './Heading';

export default {
	component: Heading,
} as ComponentMeta<typeof Heading>;

const Story: ComponentStory<typeof Heading> = (args) => <Heading {...args}>{HeadingMockCopy}</Heading>;

export const Standard = Story.bind({});
Standard.args = HeadingMockData;
