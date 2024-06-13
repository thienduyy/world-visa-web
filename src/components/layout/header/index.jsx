"use client";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";

const Header = ({ lang, common }) => {
	return (
		<header className="container fixed top-0 flex items-center justify-between py-4">
			<Logo />
			<h1>Header</h1>
			<Button className="gap-2">
				<span>{common.header.menu.contact}</span>
				<ArrowRight size={14} color="#188AC1" strokeWidth={3} className="bg-white rounded-full p-[2px]" />
			</Button>
		</header>
	);
};

export default Header;
