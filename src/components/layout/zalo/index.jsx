'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Zalo = ({ href }) => {
	return (
		<Link
			href={href ?? 'https://zaloweb.me/'}
			target="_blank"
			passHref
			className="fixed z-[49] bottom-1/4 right-[1%] hover:scale-110 transition-all duration-300"
		>
			<motion.div
				animate={{
					opacity: 1,
					x: 0,
					rotate: [0, 15, 0, -15, 0],
					transition: {
						duration: 1.25,
						repeat: Infinity,
					},
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					viewBox="0 0 81 88"
					fill="none"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M55.6934 80.2325C57.8344 81.7369 60.5523 83.3414 63.74 84.5811C69.9188 86.9838 74.5347 87.1239 76.6687 87C81.4297 86.7233 82.0703 83.628 79.517 79.7873C76.6017 75.4017 73.7928 70.4455 74.0705 64.9604C78.4448 58.3265 81 50.323 81 41.718C81 18.7776 62.8674 0.180664 40.5 0.180664C18.1325 0.180664 0 18.7776 0 41.718C0 64.6583 18.1325 83.2553 40.5 83.2553C45.8674 83.2553 50.998 82.1825 55.6934 80.2325Z"
						fill="#0068FF"
					/>
					<path
						d="M47.3473 30.834C47.3711 37.2994 47.3077 43.7676 47.3763 50.2304C47.7934 51.7381 49.6387 51.0126 50.7474 51.1717C50.7289 44.3934 50.7289 37.6123 50.7474 30.834C49.6123 30.834 48.4798 30.834 47.3473 30.834ZM12.7021 31.074C12.6968 32.2177 12.6889 33.3641 12.7126 34.5077C16.353 34.4673 19.9959 34.4969 23.6363 34.4915C20.0936 39.0635 16.4929 43.5923 12.9344 48.1534C12.2269 48.9761 12.2163 50.1198 12.2031 51.1528C16.9865 51.2041 21.7725 51.1528 26.5586 51.1798C27.105 51.1744 27.765 51.2203 28.1293 50.7078C28.71 49.9148 28.3959 48.8493 28.4672 47.9349C24.642 47.9349 20.8169 47.9511 16.9918 47.9268C20.5899 43.3468 24.1141 38.7074 27.7148 34.1274C28.4065 33.2751 28.4645 32.126 28.5015 31.0713C23.235 31.0336 17.9712 31.0687 12.7021 31.074ZM59.1764 35.5624C56.922 36.0506 54.9025 37.5907 53.8571 39.6973C52.6243 42.0845 52.7062 45.1216 54.0631 47.4413C55.7921 50.581 59.7836 52.1481 63.1177 50.9478C67.0431 49.7394 69.419 45.0218 68.1175 41.0541C67.0801 37.2401 62.9672 34.6965 59.1764 35.5624ZM31.0938 38.3865C28.6836 41.3049 28.8183 45.9875 31.4185 48.736C33.8577 51.5736 38.4695 52.1023 41.405 49.7718C41.6189 50.2627 41.7852 50.8642 42.3237 51.0881C43.0919 51.2499 43.8865 51.1555 44.6679 51.1771C44.6547 46.1035 44.6599 41.0325 44.6652 35.9616C43.6014 35.967 42.5402 35.9643 41.4763 35.9697C41.4842 36.2232 41.5027 36.7276 41.5106 36.9812C40.6975 36.4768 39.8554 36.002 38.9262 35.762C36.1121 34.9393 32.9179 36.0776 31.0938 38.3865Z"
						fill="white"
					/>
					<path
						d="M35.3914 39.0665C37.5983 38.1062 40.3675 39.3847 41.1885 41.6667C42.0359 43.7652 41.1252 46.3897 39.1532 47.447C37.0281 48.6932 34.0557 47.7437 32.9998 45.4834C31.7617 43.1637 32.947 39.9458 35.3914 39.0665Z"
						fill="#0068FF"
					/>
					<path
						d="M59.1132 38.9999C61.4204 38.0343 64.2846 39.4315 65.0238 41.8537C65.9081 44.3001 64.4008 47.2861 61.9062 47.8957C59.7204 48.57 57.2046 47.2267 56.4575 45.0311C55.5547 42.7087 56.8007 39.8334 59.1132 38.9999Z"
						fill="#0068FF"
					/>
				</svg>
			</motion.div>
		</Link>
	);
};

export default Zalo;