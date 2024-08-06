'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { MessageSquareQuote } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Feedback = ({}) => {
	return (
		<div className="w-full snap-start bg-gradient-to-b from-[#D3EFFA]/30 to-[#D3EFFA]/40 pt-10 pb-20 overflow-hidden">
			<div className="container w-full">
				<motion.p
					whileInView={{ scale: [0, 1.8, 0.5, 1] }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 40,
						duration: 1,
						delay: 0.15,
					}}
					className="text-[36px] font-semibold text-primary-700 cursor-pointer text-center"
				>
					Khách hàng nói gì về chúng tôi
				</motion.p>
				<motion.div
					initial="hidden"
					whileInView="visible"
					transition={{ staggerChildren: 0.2, delayChildren: 0.25 }}
					className="w-full !h-[inherit] pt-12"
				>
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						className="mySwiper !overflow-y-visible !px-4"
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
					>
						<SwiperSlide>
							<Item />
						</SwiperSlide>
						<SwiperSlide>
							<Item />
						</SwiperSlide>
						<SwiperSlide>
							<Item />
						</SwiperSlide>
						<SwiperSlide>
							<Item />
						</SwiperSlide>
						<SwiperSlide>
							<Item />
						</SwiperSlide>
						<SwiperSlide>
							<Item />
						</SwiperSlide>
						<SwiperSlide>
							<Item />
						</SwiperSlide>
						<SwiperSlide>
							<Item />
						</SwiperSlide>
					</Swiper>
				</motion.div>
			</div>
		</div>
	);
};

export default Feedback;

const animation = {
	hidden: {
		opacity: 0,
		y: '100%',
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const Item = () => {
	return (
		<motion.div
			variants={animation}
			transition={{ duration: 0.5 }}
			className="relative shadow-md rounded-[8px] bg-white p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all"
		>
			<div className="h-[60px] w-[60px] rounded-full bg-primary flex items-center justify-center absolute right-[20px] top-[-30px]">
				<MessageSquareQuote color="white" size={32} strokeWidth={2} />
			</div>
			<div className="flex items-center justify-center mt-2">
				<div className="relative rounded-full w-full h-[60px] aspect-square overflow-hidden flex justify-center">
					<Image
						fill
						style={{ objectFit: 'cover' }}
						alt="image-feedback"
						src={'/images/service/mockup.png'}
						className="static w-[60px] h-[60px]"
					/>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<p className="font-semibold text-xl">Thien Duy</p>
			</div>
			<div className="flex justify-start items-start text-start text-sm text-dark pt-2 h-[150px] overflow-auto">
				{
					'Nhân viên tư vấn và hỗ trợ rất nhiệt tình, thủ tục làm nhanh gọn. Sẽ gắn bó dài lâu với dịch vụ World Visa. Nhân viên tư vấn và hỗ trợ rất nhiệt tình, thủ tục làm nhanh gọn. Sẽ gắn bó dài lâu với dịch vụ World Visa. Nhân viên tư vấn và hỗ trợ rất nhiệt tình, thủ tục làm nhanh gọn. Sẽ gắn bó dài lâu với dịch vụ World Visa. Nhân viên tư vấn và hỗ trợ rất nhiệt tình, thủ tục làm nhanh gọn. Sẽ gắn bó dài lâu với dịch vụ World Visa'
				}
			</div>
		</motion.div>
	);
};
