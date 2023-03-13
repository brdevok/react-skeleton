import React from 'react';
import type { HeadingProps } from './Heading.types';

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(({ type, as, children, ...props }, ref) => {
	const _Heading = type ? type : 'h1';
	
	return(
		<_Heading
			ref={ref}
			data-id='heading'
			data-as={as}
			{...props}
		>
			{children}
		</_Heading>
	);
});

export default Heading;
