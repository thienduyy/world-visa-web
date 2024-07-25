import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['en', 'vi'];
export let defaultLocale = 'vi';

function getLocale(request) {
	const headers = new Headers(request.headers);
	const acceptLanguage = headers.get('accept-language');
	if (acceptLanguage) {
		headers.set('accept-language', acceptLanguage.replaceAll('_', '-'));
	}

	const headersObject = Object.fromEntries(headers.entries());
	const languages = new Negotiator({ headers: headersObject }).languages();
	return match(languages, locales, defaultLocale);
}

export async function middleware(request) {
	const pathname = request.nextUrl.pathname;
	const url = request.nextUrl.clone();

	console.log('pathname', pathname);
	
	const pathnameIsMissingLocale = locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
		);

	if (pathnameIsMissingLocale) {
		let locale = getLocale(request) ?? defaultLocale;
		
		const newUrl = new URL(`/${locale}${pathname}`, request.nextUrl.clone().origin);

		// e.g. incoming request is /products
		// The new URL is now /en/products
		return NextResponse.rewrite(`${url.origin}/${'vi'}`);
	}
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		// '/((?!api|_next/static|_next/image|assets|sw.js).*)',
		// Optional: only run on root (/) URL
		'/',
		'/vi',
		'/en',
		'/vi/:path*',
		'/en/:path*',
	],
};
