import React from 'react';
import type { ReactElement } from 'react';
import DefaultTemplate from '@components/templates/DefaultTemplate/DefaultTemplate';
import Heading from '@components/atoms/Heading/Heading';

const NotFound = (): ReactElement => {
	return(
		<DefaultTemplate>
			<Heading as="h2">Oops! Page not found.</Heading>
		</DefaultTemplate>
	);
};

export default NotFound;
