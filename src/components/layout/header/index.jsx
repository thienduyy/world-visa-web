'use client';
import Logo from './Logo';
import { AlignJustify, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Header = ({ lang, common }) => {
	return (
		<header className="fixed z-[100] top-0 w-full bg-[rgba(255, 255, 255, 0.4)] backdrop-blur-[6px]">
			<div className="container flex items-center justify-between py-2">
				<Logo />
				<Menu common={common} />
				<Button className="gap-2 hidden lg:flex">
					<span>{common.header.menu.contact}</span>
					<ArrowRight
						size={14}
						color="#188AC1"
						strokeWidth={3}
						className="bg-white rounded-full p-[2px]"
					/>
				</Button>
				<MobileMenu common={common} />
			</div>
		</header>
	);
};

export default Header;
