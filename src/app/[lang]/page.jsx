import Hero from '@/modules/homepage/hero';
import AboutUs from '@/modules/homepage/about-us';
import ServiceProcess from '@/modules/homepage/service-process';
import Services from '@/modules/homepage/services';
import Image from 'next/image';
import BackgroundAboutUs from '/public/images/homepage/bg-about-us.png';
import WhyChooseUs from '@/modules/homepage/why-choose-us';
import Award from '@/modules/homepage/award';
import Feedback from '@/modules/homepage/feedback';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start w-full overflow-x-hidden">
			<Hero />
			<div className="relative w-full">
				<AboutUs />
				<ServiceProcess />
				<Image
					src={BackgroundAboutUs.src}
					alt="bg-about-us-image"
					fill
					style={{ objectFit: 'cover' }}
					className="absolute inset-0 !z-[-1] animate-spin [animation-duration:60s]"
				/>
			</div>
			<Services />
			<WhyChooseUs />
			<Award />
			<Feedback />
		</main>
	);
}
