import { Inter } from "next/font/google";
import "../globals.css";
import Favicon from "/public/images/Metadata/favicon.ico";
import Header from "@/components/layout/header";
import { getCommon } from "./dictionaries";
import { defaultLocale } from "../../middleware";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "vn" }];
}

export const metadata = {
	title: "Công ty dịch vụ visa uy tín tại Hồ Chí Minh | Thế giới Visa",
	description:
		"Thế giới Visa là công ty dịch vụ visa uy tín tại Hồ Chí Minh. Chúng tôi cung cấp dịch vụ xin visa đi các nước trên thế giới.",
	icons: [{ rel: "icon", url: Favicon.src }],
};

export default async function RootLayout({
	children,
	params = { lang: defaultLocale },
}) {
	const { lang } = params;
	if (lang !== "en" && lang !== "vn") {
		return null;
	}
	console.log("lang", lang);
	const common = await getCommon(lang);
	return (
		<html lang={lang ?? defaultLocale}>
			<body className={inter.className}>
				<Header lang={lang} common={common} />
				{children}
			</body>
		</html>
	);
}
