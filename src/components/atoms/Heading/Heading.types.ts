import type { AbstractProps } from 'global-types/AbstractProps';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends AbstractProps {
	type?: HeadingType;
	as?: HeadingType;
}
