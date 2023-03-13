import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import DefaultTemplate from './DefaultTemplate';
import { DefaultTemplateMockData } from './DefaultTemplate.mocks';

export default {
	component: DefaultTemplate,
} as ComponentMeta<typeof DefaultTemplate>;

const Story: ComponentStory<typeof DefaultTemplate> = (args) => <DefaultTemplate {...args} />;

export const Standard = Story.bind({});
Standard.args = DefaultTemplateMockData;
