import { HeroImage, HeroTitle } from './content';

export default function Hero() {
	return (
		<div className="w-full bg-gradient-to-b from-[#D3EFFA] to-[#FCFCFC] pt-20 snap-start">
			{/* grid-cols-[400px_auto] */}
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 py-10 lg:py-16">
				<HeroTitle />
				<HeroImage />
			</div>
		</div>
	);
}