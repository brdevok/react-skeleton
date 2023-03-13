import React from 'react';
import type { ReactElement } from 'react';
import { createContext, useState } from 'react';
import type { AppContextInterface, AppContextProps, AppContextState } from './AppContext.types';

export const AppContext = createContext({} as AppContextInterface);

const AppContextProvider = ({ children }: AppContextProps): ReactElement => {
	const [state, setState] = useState<AppContextState>({
		theme: 'light',
	});

	const toggleTheme = () => {
		if (state.theme === 'light') {
			setState({ ...state, theme: 'dark' });
		} else {
			setState({ ...state, theme: 'light' });
		}
	};

	return(
		<AppContext.Provider value={{
			...state,
			toggleTheme,
		}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
