import React from 'react';
import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { serviceOther, serviceVisa } from '@/lib/data/menu';
import { AlignJustify, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import LogoHeader from './Logo';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

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

const MobileMenu = ({ common }) => {
	const items = menuItems(common);

	return (
		<Drawer direction="right">
			<DrawerTrigger>
				<AlignJustify
					size={32}
					color="#188AC1"
					strokeWidth={3}
					className="lg:hidden"
				/>
			</DrawerTrigger>
			<DrawerContent className="w-[500px] overflow-y-auto bg-white flex flex-col h-full bg-gradient-to-b from-[#D3EFFA] to-[#FCFCFC]">
				<DrawerHeader className="w-full flex justify-center mt-4">
					<LogoHeader />
				</DrawerHeader>
				<div className="flex flex-col w-full px-8">
					{items?.map((item, index) => (
						<div
							className="border-b border-primary-200/60 last:border-b-0 py-3 flex justify-between items-center"
							key={index}
						>
							{!item?.children && (
								<Link href={item.href} legacyBehavior passHref>
									<span className="text-lg font-medium text-gray-600">
										{item.title}
									</span>
								</Link>
							)}
							{item?.children && (
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem className="border-b-0" value={item.title}>
										<AccordionTrigger className="py-0 text-lg font-medium text-gray-600">
											{item.title}
										</AccordionTrigger>
										<AccordionContent className="pl-2 pt-2 pb-0">
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
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							)}
							{/* <ChevronDown size={18} className="text-primary" /> */}
						</div>
					))}
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default MobileMenu;

const ListItemCountry = ({ title, country }) => {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full border-b last:border-b-0 border-primary-200/70"
		>
			<AccordionItem className="border-0" value={title}>
				<AccordionTrigger className="py-3 text-lg font-medium text-gray-600">
					{title}
				</AccordionTrigger>
				<AccordionContent className="px-4 pt-0 pb-0">
					{country?.map((item, index) => (
						<Accordion
							key={index}
							type="single"
							collapsible
							className="w-full border-b last:border-b-0 border-primary-200/70"
						>
							<AccordionItem className="border-0" value={title}>
								<AccordionTrigger
									className={
										'py-3 text-lg font-medium text-gray-600 [&_svg]:hidden'
									}
								>
									<Link
										href={item.href}
										className="block select-none space-y-1 rounded-md py-2 leading-none no-underline outline-none transition-colors hover:text-primary group focus:bg-accent focus:text-accent-foreground"
									>
										{item.title}
									</Link>
								</AccordionTrigger>
							</AccordionItem>
						</Accordion>
					))}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

const ListItem = ({ title, href, titleClassName }) => {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full border-b last:border-b-0 border-primary-200/70"
		>
			<AccordionItem className="border-0" value={title}>
				<AccordionTrigger
					className={'py-3 text-lg font-medium text-gray-600 [&_svg]:hidden'}
				>
					<Link
						href={href}
						className="block select-none space-y-1 rounded-md py-2 leading-none no-underline outline-none transition-colors hover:text-primary group focus:bg-accent focus:text-accent-foreground"
					>
						{title}
					</Link>
				</AccordionTrigger>
			</AccordionItem>
		</Accordion>
	);
};
