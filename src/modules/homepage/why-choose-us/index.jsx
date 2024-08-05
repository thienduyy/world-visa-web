'use client';
import Image from 'next/image';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import WhyChooseUs1 from '@/assets/icon/WhyChooseUs1';
import WhyChooseUs2 from '@/assets/icon/WhyChooseUs2';
import WhyChooseUs3 from '@/assets/icon/WhyChooseUs3';
import WhyChooseUs4 from '@/assets/icon/WhyChooseUs4';
import WhyChooseUs5 from '@/assets/icon/WhyChooseUs5';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
	return (
		<div className="w-full bg-gradient-to-b from-[#FCFCFC] to-[#D3EFFA]/70 pb-6 pt-10 lg:pb-20">
			{/* grid-cols-[400px_auto] */}
			<div className="container w-full">
				<motion.div
					whileInView={{ scale: [0, 1.8, 0.5, 1] }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 40,
						duration: 1,
						delay: 0.15,
					}}
					className="flex flex-col items-center pb-8 text-center"
				>
					<p className="text-[36px] font-semibold text-primary-700 cursor-pointer">
						Vì sao khách hàng chọn
					</p>
					<p className="text-[36px] font-semibold text-primary-700 cursor-pointer">
						Thế giới Visa?
					</p>
				</motion.div>
				<Content />
			</div>
		</div>
	);
};

export default WhyChooseUs;

const animationLeft = {
	hidden: {
		opacity: 0,
		y: '100%',
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const data = [
	{
		icon: (
			<WhyChooseUs1 className="fill-primary-300 group-hover:fill-white duration-300 transition-all" />
		),
		title: 'Giàu kinh nghiệm',
		description:
			'Đội ngũ tư vấn giàu kinh nghiệm, lắng nghe nhu cầu của khách hàng để đưa ra giải pháp phù hợp.',
	},
	{
		icon: (
			<WhyChooseUs2 className="fill-primary-300 group-hover:fill-white duration-300 transition-all" />
		),
		title: 'Minh bạch',
		description:
			'Quy trình làm việc rõ ràng, chi phí dịch vụ được báo ngay từ đầu và cam kết không phát sinh.',
	},
	{
		icon: (
			<WhyChooseUs3 className="fill-primary-300 group-hover:fill-white duration-300 transition-all" />
		),
		title: 'Tận tình',
		description:
			'Dịch vụ khách hàng tận tình, sẵn sàng hỗ trợ trong và ngoài giờ hành chính.',
	},
	{
		icon: (
			<WhyChooseUs4 className="fill-primary-300 group-hover:fill-white duration-300 transition-all" />
		),
		title: 'Trọn gói',
		description:
			'Dịch vụ trọn gói (visa, vé máy bay, bảo hiểm, SIM quốc tế,...) giúp chuyến đi trọn vẹn.',
	},
	{
		icon: (
			<WhyChooseUs5 className="fill-primary-300 group-hover:fill-white duration-300 transition-all" />
		),
		title: 'Tiện lợi & Chuyên nghiệp',
		description:
			'Quy trình xử lý nhanh chóng, tiết kiệm tối đa thời gian và công sức cho khách hàng. Xuất hóa đơn VAT phí dịch vụ cho doanh nghiệp có nhu cầu.',
	},
	// {
	// 	icon: <WhyChooseUs1 className="fill-primary-300 group-hover:fill-white duration-300 transition-all" />,
	// 	title: 'Giàu kinh nghiệm',
	// 	description:
	// 		'Đội ngũ tư vấn giàu kinh nghiệm, lắng nghe nhu cầu của khách hàng để đưa ra giải pháp phù hợp.',
	// },
];
const Content = () => {
	return (
		<div className="w-full flex flex-col lg:flex-row items-center h-full gap-12 lg:gap-4">
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 40,
					duration: 1,
					delay: 0.5,
				}}
				className="relative aspect-video w-full"
			>
				<Image
					fill
					style={{ objectFit: 'cover' }}
					alt="image-service"
					src={'/images/homepage/bg-why-choose-us.png'}
					className="static w-full h-full z-0"
				/>
				{/* 123 */}
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2, delayChildren: 0.75 }}
				className="w-full h-auto z-0 grid grid-cols-1 gap-4"
			>
				{data?.map((item, index) => (
					<motion.div
						variants={animationLeft}
						transition={{ duration: 0.5 }}
						key={index}
						className="h-auto group flex justify-start items-center p-4 gap-4 rounded-md hover:bg-white cursor-pointer hover:shadow-lg"
					>
						<div className="group-hover:bg-primary h-[56px] w-[56px] flex items-center justify-center rounded-full border border-primary-100 duration-300 transition-all">
							{item.icon}
						</div>
						<div className="flex flex-col w-[calc(100%-56px-16px)]">
							<p className="font-bold text-primary-500">{item.title}</p>
							<span className="text-sm line-clamp-2 text-dark font-normal">
								{item.description}
							</span>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};