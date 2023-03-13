import React from 'react';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

export const pages = [
	{
		path: '/',
		element: <Home/>,
	},
	{
		path: '/not-found',
		element: <NotFound/>,
	},
] as const;
