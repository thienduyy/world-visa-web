import '../globals.css';
import Favicon from '/public/images/Metadata/favicon.ico';
import Header from '@/components/layout/header';
import { getCommon } from './dictionaries';
import { defaultLocale } from '../../middleware';
import Footer from '@/components/layout/footer';
import Zalo from '@/components/layout/zalo';
import BackToTop from '@/components/layout/back-to-top';
import { Toaster } from '@/components/ui/toaster';

export async function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'vi' }];
}

export const metadata = {
	title: 'Công ty dịch vụ visa uy tín tại Hồ Chí Minh | Thế giới Visa',
	description:
		'Thế giới Visa là công ty dịch vụ visa uy tín tại Hồ Chí Minh. Chúng tôi cung cấp dịch vụ xin visa đi các nước trên thế giới.',
	icons: [{ rel: 'icon', url: Favicon.src }],
};

export default async function RootLayout({
	children,
	params = { lang: defaultLocale },
}) {
	const { lang } = params;
	if (lang !== 'en' && lang !== 'vi') {
		return null;
	}

	const common = await getCommon(lang);
	return (
		<html lang={lang ?? defaultLocale}>
			<body className={''} id="main">
				<Toaster />
				<Header lang={lang} common={common} />
				{children}
				<Zalo href={""} />
				<BackToTop />
				<Footer lang={lang} common={common} />
			</body>
		</html>
	);
}
