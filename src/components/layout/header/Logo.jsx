import Image from 'next/image';
import Logo from '/public/images/logo.png';
import Link from 'next/link';

const LogoHeader = () => {
	return (
		<div className="">
			<Link href="/">
				<Image src={Logo.src} alt="Logo" width={114} height={80} />
			</Link>
		</div>
	);
};

export default LogoHeader;
