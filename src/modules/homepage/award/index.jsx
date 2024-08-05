'use client';
import Award1 from '@/assets/icon/Award1';
import Award2 from '@/assets/icon/Award2';
import Award3 from '@/assets/icon/Award3';
import Award4 from '@/assets/icon/Award4';
import { motion } from 'framer-motion';

const Award = () => {
	const data = [
		{
			icon: <Award1 />,
			title: '500+',
			content: 'Hồ sơ thành',
		},
		{
			icon: <Award2 />,
			title: '1.800+',
			content: 'Khách hàng doanh nghiệp',
		},
		{
			icon: <Award3 />,
			title: '2.000+',
			content: 'Khách hàng hài lòng',
		},
		{
			icon: <Award4 />,
			title: '3+',
			content: 'Năm kinh nghiệm',
		},
	];
	return (
		<div className="w-full bg-gradient-to-b from-[#D3EFFA]/70 to-[#D3EFFA]/30 pt-10 pb-20">
			{/* grid-cols-[400px_auto] */}
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
					Thành tựu đạt được
				</motion.p>
				<motion.div
					whileInView="visible"
					transition={{ staggerChildren: 0.2, delayChildren: 0.75 }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 justify-between items-center pt-16"
				>
					{data.map((item, index) => (
						<Item key={index} {...item} />
					))}
					{/* <Item icon={<Award1 />} title={'500+'} content="Hồ sơ thành công" /> */}
				</motion.div>
			</div>
		</div>
	);
};

export default Award;

const animation = {
	visible: {
		scale: [0, 0.5, 1.5, 1],
	},
};

const Item = ({ icon, title, content }) => {
	return (
		<motion.div
			variants={animation}
			transition={{ duration: 0.5 }}
			className="flex flex-col items-center gap-2"
		>
			<div className="h-[100px] w-[100px] flex items-center justify-center rounded-full border bg-primary">
				{icon}
			</div>
			<p className="font-bold text-2xl text-primary-600 text-nowrap">{title}</p>
			<p className="text-dark text-md text-nowrap">{content}</p>
		</motion.div>
	);
};
