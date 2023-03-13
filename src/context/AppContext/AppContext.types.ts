import type { AbstractProps } from '@global-types/AbstractProps';
import type { Theme } from '@global-types/Theme';

export interface AppContextState {
	theme: Theme;
}

export interface AppContextMethods {
	toggleTheme: () => void;
}

export type AppContextInterface = AppContextState & AppContextMethods;

export type AppContextProps = AbstractProps;
