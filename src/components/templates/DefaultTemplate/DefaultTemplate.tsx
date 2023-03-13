import { AppContext } from '@context/AppContext/AppContext';
import React, { useContext } from 'react';
import type { DefaultTemplateProps } from './DefaultTemplate.types';

const DefaultTemplate = React.forwardRef<HTMLDivElement, DefaultTemplateProps>(({ children, ...props }, ref) => {
	const { theme } = useContext(AppContext);

	return(
		<main
			ref={ref}
			data-id="default-template"
			data-theme={theme} 
			{ ...props }
		>
			{children}
		</main>
	);
});

export default DefaultTemplate;
