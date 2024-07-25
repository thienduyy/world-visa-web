import Form from './form';
import { Facebook, Linkedin, Chrome } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = ({}) => {
	return (
		<div className="bg-[#D3EFFA]/40">
			<div className="relative bg-[#42A7C3] z-1 w-full overflow-hidden rounded-t-[40px]">
				<div className="relative !z-[1] container mt-12">
					<Form />
					<Information />
				</div>
				<Image
					src="/images/footer/background.png"
					alt="bg-footer-image"
					fill
					style={{ objectFit: 'cover' }}
					className="absolute !w-2/3 !bottom-[-60%] !left-[-20%] !top-auto !right-auto !z-[0] overflow-visible animate-spin [animation-duration:60s]"
				/>
				<Image
					src="/images/homepage/background.png"
					alt="bg-footer-image"
					fill
					style={{ objectFit: 'cover' }}
					className="absolute opacity-50 !w-1/3 !top-[-40%] !right-[-10%] !left-auto !bottom-auto !z-[0] overflow-visible animate-spin [animation-duration:30s]"
				/>
			</div>
		</div>
	);
};

export default Footer;

const Information = () => {
	return (
		<div className="mt-16 mb-4">
			<p className="text-[28px] font-semibold text-white">World Visa</p>
			<div className="py-6 flex justify-between text-white font-light text-sm border-b border-white/30">
				<div className="flex flex-col gap-y-2 justify-center">
					<p>Location</p>
					<p className="text-xs">Ho Chi Minh</p>
				</div>
				<div className="flex flex-col gap-y-2">
					<p>Email</p>
					<p className="text-xs">visatheworld.vn@gmail.com</p>
				</div>
				<div className="flex flex-col gap-y-2">
					<p>About World Visa</p>
					<p className="text-xs">https://worldvisa.com</p>
				</div>
				<div className="flex items-center gap-4">
					<Link
						href="/"
						rel="noopener noreferrer"
						target="_blank"
						className="p-2 border border-white rounded-md cursor-pointer hover:bg-primary-400 hover:scale-105 transition-all"
					>
						<Facebook size={20} />
					</Link>
					<Link
						href="/"
						rel="noopener noreferrer"
						target="_blank"
						className="p-2 border border-white rounded-md cursor-pointer hover:bg-primary-400 hover:scale-105 transition-all"
					>
						<Linkedin size={20} />
					</Link>
					<Link
						href="/"
						rel="noopener noreferrer"
						target="_blank"
						className="p-2 border border-white rounded-md cursor-pointer hover:bg-primary-400 hover:scale-105 transition-all"
					>
						<Chrome size={20} />
					</Link>
				</div>
			</div>
			<p className="pt-6 text-xs font-light text-white">Copyright © 2024 World Visa. All rights reserved.</p>
		</div>
	);
};
