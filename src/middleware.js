import { NextResponse } from 'next/server';
export function middleware(request) {
    const isSeller = false;
    const isUser = false;

    if (isSeller) {
        return NextResponse.redirect(new URL('/seller-signup', request.url));
    } else if (isUser) {
        return NextResponse.redirect(new URL('/signup', request.url));
    }
    return NextResponse.next();

}


export const config = {
    matcher: ['/seller/:path*', '/account/:path*'],
};
