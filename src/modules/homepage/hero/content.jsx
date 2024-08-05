'use client';
import HeroTitleIcon from '@/assets/icon/HeroTitle';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Background from '../../../../public/images/homepage/background.png';
import Personal from '../../../../public/images/homepage/personal.png';
import Card from '../../../../public/images/homepage/Card.png';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animation';

export const HeroTitle = () => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			variants={fadeInRight}
			className="flex flex-col gap-4 lg:gap-12 items-start justify-center"
		>
			<div className="relative">
				<div className="text-4xl text-center lg:text-start leading-[50px] md:text-5xl font-bold md:leading-[70px] text-dark">
					<span>Dịch vụ visa </span>
					<span className="text-primary-400">uy tín, chuyên nghiệp</span>
					<span> tại TP.Hồ Chí Minh</span>
				</div>
				<HeroTitleIcon className="animate-bounce absolute top-[-40px] right-[-25px] md:right-0" />
			</div>
			<div className="hidden lg:flex items-center justify-start gap-4 w-full md:w-fit">
				<Button className="gap-2 w-1/2">
					<span>Lien he ngay</span>
					<ArrowRight
						size={14}
						color="#188AC1"
						strokeWidth={3}
						className="bg-white rounded-full p-[2px]"
					/>
				</Button>
				<Button className="gap-2 w-1/2" variant="outline">
					<span>Tim hieu them</span>
					<Phone
						size={14}
						color="#188AC1"
						strokeWidth={3}
						className="fill-[#188AC1]"
					/>
				</Button>
			</div>
		</motion.div>
	);
};

export const HeroImage = () => {
	return (
		<motion.div initial="hidden" whileInView="visible" variants={fadeInLeft}>
			<div className="w-full aspect-square flex items-center justify-center relative">
				<Image
					src={Background.src}
					alt="Homepage-background"
					fill
					style={{ objectFit: 'cover' }}
					className="absolute inset-0 z-0 animate-spin [animation-duration:10s]"
				/>
				<Image
					src={Personal.src}
					alt="Homepage-personal"
					fill
					style={{ objectFit: 'cover' }}
					className="absolute inset-0 z-1"
				/>
				<Image
					src={Card.src}
					alt="Homepage-personal"
					width={170}
					height={165}
					style={{ objectFit: 'cover' }}
					className="absolute bottom-8 left-0 z-1"
				/>
			</div>
			<div className="flex lg:hidden items-center justify-start gap-4 w-full lg:w-fit pt-10">
				<Button className="gap-2 w-1/2">
					<span>Lien he ngay</span>
					<ArrowRight
						size={14}
						color="#188AC1"
						strokeWidth={3}
						className="bg-white rounded-full p-[2px]"
					/>
				</Button>
				<Button className="gap-2 w-1/2" variant="outline">
					<span>Tim hieu them</span>
					<Phone
						size={14}
						color="#188AC1"
						strokeWidth={3}
						className="fill-[#188AC1]"
					/>
				</Button>
			</div>
		</motion.div>
	);
};
