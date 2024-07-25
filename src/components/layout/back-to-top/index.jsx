'use client';
const BackToTop = () => {
	const scrollToTop = () => {
		window?.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button onClick={scrollToTop} className="btn-back-to-top bottom-0">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="25"
				viewBox="0 0 25 30"
				fill="none"
				className="arrow"
			>
				<path
					d="M12.5879 3.625L12.5879 26.125"
					stroke="#75C8EB"
					strokeWidth="6"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.5515 12.6992L12.5875 3.62422L21.625 12.6992"
					stroke="#75C8EB"
					strokeWidth="6"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
};

export default BackToTop;
