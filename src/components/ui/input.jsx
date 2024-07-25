import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(
	({ prefixIcon, className, type, ...props }, ref) => {
		return (
			<label className="relative text-gray-400 focus-within:text-gray-600 block w-full">
				{prefixIcon && (
					<div className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3 flex items-center focus:ring-primary-300">
						{prefixIcon}
					</div>
				)}
				<input
					type={type}
					className={cn(
						'flex h-[2.8rem] w-full rounded-md border border-input bg-background px-3 py-4 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
						className
					)}
					ref={ref}
					{...props}
				/>
			</label>
		);
	}
);
Input.displayName = 'Input';

export { Input };
