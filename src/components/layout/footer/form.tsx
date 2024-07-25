'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { UserRound, AtSign, Phone, CheckCircle2, XCircle } from 'lucide-react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { sendEmail } from './action';

const Form = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		type: '',
		message: '',
		isLoading: false,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormData((prevData) => ({
			...prevData,
			isLoading: true,
		}));
		try {
			await sendEmail(formData);
			const params = {
				data: formData,
			};
			toast({
				description: (
					<div className="flex gap-4">
						<CheckCircle2 color="#3dd68c" />
						<span className="text-[#3dd68c]">
							Bạn đã gửi tin nhắn cho World Visa!
						</span>
					</div>
				),
				duration: 3000,
			});
			// setFormData({
			// 	name: '',
			// 	email: '',
			// 	phone: '',
			// 	message: '',
			// 	isLoading: false,
			// });
		} catch (error) {
			// console.log('error:', error);
			// toast({
			// 	description: (
			// 		<div className="flex gap-4">
			// 			<XCircle color="#DD0063" />
			// 			<span className="text-[#DD0063]">Message sent failed!</span>
			// 		</div>
			// 	),
			// 	duration: 3000,
			// });
			// setFormData((prevData) => ({
			// 	...prevData,
			// 	isLoading: false,
			// }));
		}
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	return (
		<div className="w-full rounded-xl p-8 bg-primary-50/40 backdrop-blur-[4px] flex flex-col gap-y-4">
			<p className="text-white text-[32px] font-semibold text-center">
				Liên hệ với Thế giới visa
			</p>
			<div className="flex items-between justify-start gap-4">
				<div className="w-1/3 flex flex-col gap-4">
					<div className="grid w-full max-w-sm items-center gap-1">
						<Label
							htmlFor="name"
							className="text-sm font-semibold text-primary-800"
						>
							Họ và tên
						</Label>
						<Input
							prefixIcon={<UserRound size={20} />}
							type="text"
							id="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Nguyễn Bình An..."
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1">
						<Label
							htmlFor="phone"
							className="text-sm font-semibold text-primary-800"
						>
							Số điện thoại
						</Label>
						<Input
							type="tel"
							id="phone"
							pattern="[0-9]{9,11}"
							prefixIcon={<Phone size={20} />}
							placeholder="0987654321..."
							value={formData.phone}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="w-1/3 flex flex-col gap-2 justify-between">
					<div className="grid w-full max-w-sm items-center gap-1">
						<Label
							htmlFor="email"
							className="text-sm font-semibold text-primary-800"
						>
							Email
						</Label>
						<Input
							prefixIcon={<AtSign size={20} />}
							type="email"
							id="email"
							placeholder="example@worldvisa.com"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1">
						<Label
							htmlFor="type"
							className="text-sm font-semibold text-primary-800"
						>
							Bạn là
						</Label>
						<Select
							id="type"
							onValueChange={(value) =>
								setFormData((prev) => ({ ...prev, type: value }))
							}
						>
							<SelectTrigger className="w-full h-[2.8rem] text-gray">
								<SelectValue placeholder="Bạn là khách hàng nào ?" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="personal">Cá nhân</SelectItem>
									<SelectItem value="company">Doanh nghiệp</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="w-1/3 h-auto self-stretch">
					<div className="grid w-full max-w-sm items-center gap-1">
						<Label
							htmlFor="message"
							className="text-sm font-semibold text-primary-800"
						>
							Nội dung
						</Label>
						<Textarea
							id="message"
							className="h-[128px] w-full"
							placeholder="Tin nhắn bạn muốn gửi đến World Visa..."
							value={formData.message}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
			<div className="flex justify-end">
				<Button
					className="gap-2"
					onClick={handleSubmit}
					disabled={
						formData.isLoading ||
						!formData.name ||
						!formData.email ||
						!formData.phone ||
						!formData.type
					}
				>
					{formData.isLoading ? 'Loading...' : 'Gửi đến World Visa'}
				</Button>
			</div>
		</div>
	);
};

export default Form;
