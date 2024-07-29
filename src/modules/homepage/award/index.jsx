import { CircleCheck } from 'lucide-react';
import Award1 from '@/assets/icon/Award1';
import Award2 from '@/assets/icon/Award2';
import Award3 from '@/assets/icon/Award3';
import Award4 from '@/assets/icon/Award4';

const Award = () => {
	return (
		<div className="w-full bg-gradient-to-b from-[#D3EFFA]/70 to-[#D3EFFA]/30 pt-10 pb-20">
			{/* grid-cols-[400px_auto] */}
			<div className="container w-full">
				<p className="text-[36px] font-semibold text-primary-700 cursor-pointer text-center">
					Thành tựu đạt được
				</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 justify-between items-center pt-16">
					<Item icon={<Award1 />} title={'500+'} content="Hồ sơ thành công" />
					<Item
						icon={<Award2 />}
						title={'1.800+'}
						content="Khách hàng doanh nghiệp"
					/>
					<Item
						icon={<Award3 />}
						title={'2.000+'}
						content="Khách hàng hài lòng"
					/>
					<Item icon={<Award4 />} title={'3+'} content="Năm kinh nghiệm" />
				</div>
			</div>
		</div>
	);
};

export default Award;

const Item = ({ icon, title, content }) => {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="h-[100px] w-[100px] flex items-center justify-center rounded-full border bg-primary">
				{icon}
			</div>
			<p className="font-bold text-2xl text-primary-600 text-nowrap">{title}</p>
			<p className="text-dark text-md text-nowrap">{content}</p>
		</div>
	);
};
