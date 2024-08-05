'use client';
import Logo from './Logo';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';
import { fadeInDown, fadeInLeft } from '@/lib/animation';

const Header = ({ lang, common }) => {
	return (
		<header className="fixed z-[100] top-0 w-full bg-[rgba(255, 255, 255, 0.4)] backdrop-blur-[6px]">
			<div className="container flex items-center justify-between py-2">
				<Logo />
				<motion.div initial="hidden" animate="visible" variants={fadeInDown}>
					<Menu common={common} />
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeInLeft}
					className="flex items-center"
				>
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
				</motion.div>
			</div>
		</header>
	);
};

export default Header;
