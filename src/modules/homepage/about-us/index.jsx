'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Image1 from '/public/images/about-us/Image-1.png';
import Image2 from '/public/images/about-us/Image-2.png';
import Image3 from '/public/images/about-us/Image-3.png';
import Image4 from '/public/images/about-us/Image-4.png';
import Image5 from '/public/images/about-us/Image-5.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUs = () => {
	return (
		<div className="w-full snap-start bg-gradient-to-b from-[#FCFCFC] to-[#D3EFFA]/50 pt-10 pb-0">
			{/* grid-cols-[400px_auto] */}
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 md:gap-y-12 py-10 lg:py-16">
				<AboutUsImage />
				<AboutUsContent />
			</div>
		</div>
	);
};

export default AboutUs;

const AboutUsImage = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<div className="flex items-end justify-center gap-4 w-full">
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
						duration: 0.5,
					}}
					className="aspect-square h-auto w-1/3 rounded-[12px] overflow-hidden cursor-pointer relative group shadow-md"
				>
					<Image
						src={Image1.src}
						alt="about-us-image-1"
						fill
						style={{ objectFit: 'cover' }}
						className="absolute inset-0 z-1 group-hover:scale-110 transition-transform duration-300 ease-in-out"
					/>
				</motion.div>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
						duration: 0.5,
						delay: 0.2,
					}}
					className="aspect-[3/5] h-full w-1/3 rounded-[12px] overflow-hidden cursor-pointer relative group shadow-md"
				>
					<Image
						src={Image2.src}
						alt="about-us-image-1"
						fill
						style={{ objectFit: 'cover' }}
						className="absolute inset-0 z-1 group-hover:scale-110 transition-transform duration-300 ease-in-out"
					/>
				</motion.div>
			</div>
			<div className="flex items-start justify-center gap-4 w-full">
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
						duration: 0.5,
						delay: 0.4,
					}}
					className="aspect-square h-auto w-1/3 rounded-[12px] overflow-hidden cursor-pointer relative group shadow-md"
				>
					<Image
						src={Image3.src}
						alt="about-us-image-1"
						fill
						style={{ objectFit: 'cover' }}
						className="absolute inset-0 z-1 group-hover:scale-110 transition-transform duration-300 ease-in-out"
					/>
				</motion.div>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
						duration: 0.5,
						delay: 0.6,
					}}
					className="aspect-[3/5] h-full w-1/3 rounded-[12px] overflow-hidden cursor-pointer relative group shadow-md"
				>
					<Image
						src={Image4.src}
						alt="about-us-image-1"
						fill
						style={{ objectFit: 'cover' }}
						className="absolute inset-0 z-1 group-hover:scale-110 transition-transform duration-300 ease-in-out"
					/>
				</motion.div>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
						duration: 0.5,
						delay: 0.8,
					}}
					className="aspect-square h-auto w-1/3 rounded-[12px] overflow-hidden cursor-pointer relative group shadow-md"
				>
					<Image
						src={Image5.src}
						alt="about-us-image-1"
						fill
						style={{ objectFit: 'cover' }}
						className="absolute inset-0 z-1 group-hover:scale-110 transition-transform duration-300 ease-in-out"
					/>
				</motion.div>
			</div>
		</div>
	);
};

const AboutUsContent = () => {
	return (
		<div className="flex flex-col gap-6 items-start justify-center">
			<motion.div
				whileInView={{ scale: [0, 1.4, 0.7, 1] }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
					duration: 1.5,
					delay: 0.5,
				}}
				className="relative flex flex-col gap-4"
			>
				<p className="text-[36px] font-semibold text-primary-700 cursor-pointer">
					Về chúng tôi
				</p>
				<span className="text-gray font-light">
					{
						'Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
					}
				</span>
			</motion.div>
			<motion.div
				whileInView={{ scale: [0, 1.4, 0.7, 1] }}
				transition={{
					type: 'spring',
					stiffness: 260,
					damping: 20,
					duration: 1,
					delay: 0.75,
				}}
				className="flex items-center justify-start gap-4 w-full lg:w-fit"
			>
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
			</motion.div>
		</div>
	);
};
