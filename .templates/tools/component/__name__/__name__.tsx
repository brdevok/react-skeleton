import React from 'react';
import type { __name__Props } from './__name__.types';

const __name__ = React.forwardRef<HTMLDivElement, __name__Props>((props, ref) => {
	return(
		<div
			ref={ref}
			data-id="__name__(kebabCase)"
		>
			Hello world from __name__ component
		</div>
	);
});

export default __name__;
