import {
	MessageSquareText,
	FileText,
	BriefcaseBusiness,
	CircleCheck,
} from 'lucide-react';

const ServiceProcess = () => {
	return (
		<div className="w-full bg-gradient-to-b from-[#D3EFFA]/50 to-[#D3EFFA]/70 pb-20">
			{/* grid-cols-[400px_auto] */}
			<div className="container">
				<p className="text-[36px] font-semibold text-primary-700 cursor-pointer text-center">
					Quy trình dịch vụ
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 lg:pt-16">
					<ProcessItem
						icon={<MessageSquareText color="white" />}
						title="Liên hệ tư vấn"
						description="Khi nhận được cuộc gọi hoặc thông tin từ khách hàng, chuyên viên của World Visa sẽ nhanh chóng tư vấn. Chúng tôi hỗ trợ khách hàng cả trong và ngoài giờ làm việc, đối với các trường hợp cần xử lý gấp."
					/>
					<ProcessItem
						icon={<FileText color="white" />}
						title="Báo giá"
						description="Khi nhận được cuộc gọi hoặc thông tin từ khách hàng, chuyên viên của World Visa sẽ nhanh chóng tư vấn. Chúng tôi hỗ trợ khách hàng cả trong và ngoài giờ làm việc, đối với các trường hợp cần xử lý gấp."
					/>
					<ProcessItem
						icon={<BriefcaseBusiness color="white" />}
						title="Tiến hành dịch vụ"
						description="Khi nhận được cuộc gọi hoặc thông tin từ khách hàng, chuyên viên của World Visa sẽ nhanh chóng tư vấn. Chúng tôi hỗ trợ khách hàng cả trong và ngoài giờ làm việc, đối với các trường hợp cần xử lý gấp."
					/>
					<ProcessItem
						icon={<CircleCheck color="white" />}
						title="Hoàn tất"
						description="Khi nhận được cuộc gọi hoặc thông tin từ khách hàng, chuyên viên của World Visa sẽ nhanh chóng tư vấn. Chúng tôi hỗ trợ khách hàng cả trong và ngoài giờ làm việc, đối với các trường hợp cần xử lý gấp."
					/>
				</div>
			</div>
		</div>
	);
};

export default ServiceProcess;

const ProcessItem = ({ title, description, icon }) => {
	return (
		<div className="shadow-lg rounded-md bg-white p-6 flex flex-col items-start gap-3 cursor-pointer hover:shadow-2xl hover:-translate-y-4 transition-all">
			<div className="p-[6px] bg-[#188AC1] rounded-md">{icon}</div>
			<h3 className="font-medium">{title}</h3>
			<span className="text-sm text-[#333333] font-light">{description}</span>
		</div>
	);
};
