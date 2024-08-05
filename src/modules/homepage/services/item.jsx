'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const animationLeft = {
	hidden: {
		opacity: 0,
		x: '100%',
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};
const ServiceItem = () => {
	return (
		<motion.div
			variants={animationLeft}
			transition={{ duration: 0.5 }}
			className="relative shadow-lg rounded-lg bg-white p-4 flex flex-col items-start gap-3 cursor-pointer hover:shadow-2xl hover:-translate-y-4 transition-all"
		>
			<div className="relative rounded-md w-full aspect-video overflow-hidden">
				<Image
					fill
					style={{ objectFit: 'cover' }}
					alt="image-service"
					src={'/images/service/mockup.png'}
					className="static w-full h-ful"
				/>
			</div>
			<h4 className="font-semibold line-clamp-1 text-primary-400">
				{'Visa Viet Nam'}
			</h4>
			<span className="text-gray text-sm font-light text-start">
				{
					'Hỗ trợ visa du lịch, công tác, thăm thân, du học, kết hôn. Xin visa Trung Quốc đi hội chợ Canton Fair, triển lãm, gặp đối tác,…'
				}
			</span>
			<Button className="gap-2 p-0" variant="ghost">
				<span className="text-primary-500 text-xs font-semibold">
					{'Xem them ngay'}
				</span>
				<ArrowRight
					size={14}
					color="white"
					strokeWidth={3}
					className="bg-primary-500 rounded-full p-[2px]"
				/>
			</Button>
		</motion.div>
	);
};

export default ServiceItem;
