import React from 'react';
import type { ReactElement } from 'react';
import { createContext, useState } from 'react';
import type { __name__ContextInterface, __name__ContextProps, __name__ContextState } from './__name__Context.types';

export const __name__Context = createContext({} as __name__ContextInterface);

const __name__ContextProvider = ({ children }: __name__ContextProps): ReactElement => {
	const [state, setState] = useState<__name__ContextState>({});

	return(
		<__name__Context.Provider value={{
			...state,
		}}>
			{children}
		</__name__Context.Provider>
	);
};

export default __name__ContextProvider;
