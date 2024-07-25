import * as React from 'react';
import Link from 'next/link';
import { serviceOther, serviceVisa } from '@/lib/data/menu';
import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const menuItems = (common) => [
	{
		title: common.header.menu.about,
		href: '/#about',
	},
	{
		title: common.header.menu.services_visa,
		href: '/#services_visa',
		children: serviceVisa(common),
	},
	{
		title: common.header.menu.services_other,
		href: '/#services_other',
		children: serviceOther(common),
	},
	{
		title: common.header.menu.feedback,
		href: '/#feedback',
	},
];
const Menu = ({ common }) => {
	const items = menuItems(common);
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{items?.map((item, index) => (
					<NavigationMenuItem key={index} className="relative">
						{!item?.children && (
							<Link href={item.href} legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									{item.title}
								</NavigationMenuLink>
							</Link>
						)}
						{item?.children && (
							<React.Fragment>
								<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
								<NavigationMenuContent className="right:0 absolute left-auto ">
									<ul
										className={cn(
											item.href === '/#services_visa' &&
												'grid w-max gap-[2px] gap-3 p-4 grid-cols-5 grid-flow-col h-[calc(100vh-100px)] overflow-y-auto',
											item.href === '/#services_other' &&
												'flex flex-col w-max p-4'
										)}
									>
										{item?.children?.map((child, idx) =>
											child?.country ? (
												<ListItemCountry
													key={idx}
													title={child.title}
													country={child.country}
												/>
											) : (
												<ListItem
													key={idx}
													title={child.title}
													href={child.href}
													titleClassName={'font-normal text-muted-foreground'}
												/>
											)
										)}
									</ul>
								</NavigationMenuContent>
							</React.Fragment>
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Menu;

const ListItem = React.forwardRef(
	({ className, title, children, titleClassName, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<Link
						ref={ref}
						className={cn(
							'group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div
							className={cn('group-hover:text-primary-400 group-hover:font-medium text-sm font-medium leading-none', titleClassName)}
						>
							{title}
						</div>
					</Link>
				</NavigationMenuLink>
			</li>
		);
	}
);

const ListItemCountry = React.forwardRef(
	({ className, title, children, titleClassName, country, ...props }, ref) => {
		return (
			<li>
				<div className={cn('text-sm font-medium leading-none pb-3', titleClassName)}>
					{title}
				</div>
				{country?.map((item, index) => (
					<NavigationMenuLink asChild key={index}>
						<Link
							ref={ref}
							className={cn(
								'block select-none space-y-1 rounded-md py-2 leading-none no-underline outline-none transition-colors hover:text-primary group focus:bg-accent focus:text-accent-foreground',
								className
							)}
							href={item.href}
							{...props}
						>
							<p className="group-hover:text-primary-400 group-hover:font-medium line-clamp-2 text-sm leading-snug text-muted-foreground">
								{item.title}
								{/* {children} */}
							</p>
						</Link>
					</NavigationMenuLink>
				))}
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';
ListItemCountry.displayName = 'ListItemCountry';
