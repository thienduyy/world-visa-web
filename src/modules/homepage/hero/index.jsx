import { Button } from '@/components/ui/Button';
import { ArrowRight, Phone } from 'lucide-react';
import HeroTitleIcon from '@/assets/icon/HeroTitle';
import Image from 'next/image';
import Background from '/public/images/homepage/background.png';
import Personal from '/public/images/homepage/personal.png';
import Card from '/public/images/homepage/Card.png';

export default function Hero() {
	return (
		<div className="w-full bg-gradient-to-b from-[#D3EFFA] to-[#FCFCFC] pt-20">
			{/* grid-cols-[400px_auto] */}
			<div className="container grid grid-cols-2 gap-x-4 py-16">
				<HeroTitle />
				<HeroImage />
			</div>
		</div>
	);
}

const HeroTitle = () => {
	return (
		<div className="flex flex-col gap-12 items-start justify-center">
			<div className="relative">
				<div className="text-5xl font-bold leading-[70px] text-dark">
					<span>Dịch vụ visa </span>
					<span className="text-primary-400">uy tín, chuyên nghiệp</span>
					<span> tại TP.Hồ Chí Minh</span>
				</div>
				<HeroTitleIcon className="animate-bounce absolute top-[-40px] right-0" />
			</div>
			<div className="flex items-center justify-start gap-4">
				<Button className="gap-2">
					<span>Lien he ngay</span>
					<ArrowRight
						size={14}
						color="#188AC1"
						strokeWidth={3}
						className="bg-white rounded-full p-[2px]"
					/>
				</Button>
				<Button className="gap-2" variant="outline">
					<span>Tim hieu them</span>
					<Phone
						size={14}
						color="#188AC1"
						strokeWidth={3}
						className="fill-[#188AC1]"
					/>
				</Button>
			</div>
		</div>
	);
};
const HeroImage = () => {
	return (
		<div className="w-full aspect-square flex items-center justify-center relative">
			<Image
				src={Background.src}
				alt="Homepage-background"
				fill
				style={{ objectFit: 'cover' }}
				className="absolute inset-0 z-0 animate-spin [animation-duration:10s]"
			/>
			<Image
				src={Personal.src}
				alt="Homepage-personal"
				fill
				style={{ objectFit: 'cover' }}
				className="absolute inset-0 z-1"
			/>
			<Image
				src={Card.src}
				alt="Homepage-personal"
				width={170}
				height={165}
				style={{ objectFit: 'cover' }}
				className="absolute bottom-8 left-0 z-1"
			/>
		</div>
	);
};
