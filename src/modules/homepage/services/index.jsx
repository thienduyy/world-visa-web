'use client';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { useRef } from 'react';
import ServiceItem from './item';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/animation';

const Services = () => {
	return (
		<div className="w-full bg-gradient-to-b from-[#D3EFFA]/70 to-[#FCFCFC] pt-2 pb-6 lg:pt-10 lg:pb-10">
			{/* grid-cols-[400px_auto] */}
			<div className="container w-full flex flex-col gap-16 overflow-hidden">
				<ServiceVisa />
				<ServiceOther />
			</div>
		</div>
	);
};

export default Services;

const ServiceTitle = ({ title }) => {
	return (
		<motion.div
			initial={{ y: '-100%', opacity: 1 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 80,
				// duration: 20,
				delay: 0.5,
			}}
		>
			<div className="flex justify-between items-center">
				<div className="flex flex-col gap-1">
					<p className="text-[36px] font-semibold text-primary-700 cursor-pointer">
						{title}
					</p>
				</div>
				<Button className="gap-1" variant="ghost">
					<span className="text-primary-500 text-xs font-semibold">
						Xem them
					</span>
					<MoveRight size={14} strokeWidth={2} color="#188AC1" />
				</Button>
			</div>
			<span className="text-gray text-sm">
				{
					'Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed d'
				}
			</span>
		</motion.div>
	);
};

const ServiceVisa = () => {
	const sliderRef = useRef();

	return (
		<div className="w-full overflow-y-visible">
			<ServiceTitle title={'Dịch vụ VISA'} />
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2, delayChildren: 0.75 }}
				className="w-full !h-[inherit] pt-6"
			>
				<Swiper
					slidesPerView={1}
					spaceBetween={16}
					className="mySwiper !overflow-y-visible"
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
				>
					{[1, 2, 3, 4, 5, 6].map((item, index) => (
						<SwiperSlide key={index}>
							<ServiceItem />
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</div>
	);
};

const ServiceOther = () => {
	return (
		<div className="w-full pb-4 overflow-y-hidden">
			<ServiceTitle title={'Dịch vụ khác'} />
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.2, delayChildren: 0.75 }}
				className="w-full !h-[inherit] pt-6"
			>
				<Swiper
					slidesPerView={1}
					spaceBetween={16}
					className="mySwiper !overflow-y-visible"
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
				>
					<SwiperSlide>
						<ServiceItem />
					</SwiperSlide>
					<SwiperSlide>
						<ServiceItem />
					</SwiperSlide>
					<SwiperSlide>
						<ServiceItem />
					</SwiperSlide>
					<SwiperSlide>
						<ServiceItem />
					</SwiperSlide>
					<SwiperSlide>
						<ServiceItem />
					</SwiperSlide>
					<SwiperSlide>
						<ServiceItem />
					</SwiperSlide>
				</Swiper>
			</motion.div>
		</div>
	);
};
