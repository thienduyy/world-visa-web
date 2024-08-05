import Image from 'next/image';
import Logo from '/public/images/logo.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInRight } from '@/lib/animation';

const LogoHeader = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={fadeInRight}
			className=""
		>
			<Link href="/">
				<Image src={Logo.src} alt="Logo" width={114} height={80} />
			</Link>
		</motion.div>
	);
};

export default LogoHeader;
