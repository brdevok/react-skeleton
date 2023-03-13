import type { ReactElement } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from '@router/Router';
import AppContextProvider from '@context/AppContext/AppContext';

import '@i18next/i18next';

import '@styles/main.scss';

export const App = (): ReactElement => {
	return(
		<AppContextProvider>
			<Router/>
		</AppContextProvider>
	);
};

createRoot(document.getElementById('app') as HTMLElement).render(<App />);
