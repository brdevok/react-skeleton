import React from 'react';
import type { ReactElement } from 'react';
import DefaultTemplate from '@components/templates/DefaultTemplate/DefaultTemplate';
import Heading from '@components/atoms/Heading/Heading';
import { useTranslation } from 'react-i18next';

const Home = (): ReactElement => {
	const { t } = useTranslation();

	return(
		<DefaultTemplate>
			<Heading as="h2">{t('helloWorld')}</Heading>
		</DefaultTemplate>
	);
};

export default Home;
