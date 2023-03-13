import type { ReactElement } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from './pages';

const Router = (): ReactElement => {
	return(
		<BrowserRouter>
			<Routes>
				{pages.map((page, i) => <Route {...page} key={i} />)}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
