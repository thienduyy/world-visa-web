import Image from "next/image";
import Logo from "/public/images/logo.png";

const LogoHeader = () => {
	return (
		<div className="">
			<Image
				src={Logo.src}
				alt="Logo"
				width={114}
				height={80}
			/>
		</div>
	);
};

export default LogoHeader;
