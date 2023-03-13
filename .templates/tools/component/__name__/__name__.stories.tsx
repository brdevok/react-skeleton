import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import __name__ from './__name__';
import { __name__MockData } from './__name__.mocks';

export default {
	component: __name__,
} as ComponentMeta<typeof __name__>;

const Story: ComponentStory<typeof __name__> = (args) => <__name__ {...args} />;

export const Standard = Story.bind({});
Standard.args = __name__MockData;
