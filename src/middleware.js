import { NextResponse } from 'next/server';
export function middleware(request) {
    const isSeller = false;
    const isUser = false;

    const currentPath = request.nextUrl.pathname;

    if (isSeller && (currentPath === '/seller')) {
        return NextResponse.redirect(new URL('/seller-signup', request.url));
    } else if (isUser && (currentPath === '/account')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();

}


export const config = {
    matcher: ['/seller/:path*', '/account/:path*'],
};
