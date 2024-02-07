import { NextResponse } from 'next/server';
import { sellerData, userData } from './fakeData/userData';
const user = userData
const seller = sellerData
export function middleware(request) {
    const response = NextResponse.next()
    if (user?.email) {
        response.cookies.set({
            name: 'user',
            value: user,
            path: '/    '
        })
    } else {
        response.cookies.delete('user');
        console.log('user logout')
    }

    if (seller?.email) {
        response.cookies.set({
            name: 'seller',
            value: seller,
            path: '/    '
        })
    } else {
        response.cookies.delete('seller');
        console.log('seller logout')
    }


    const isSeller = response.cookies.get('seller');
    const isUser = response.cookies.get('user');

    const currentPath = request.nextUrl.pathname;

    if (isSeller?.value?.email && (currentPath === '/seller')) {
        return NextResponse.redirect(new URL('/seller-signup', request.url));
    } else if (isUser?.value?.email && (currentPath === '/account')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();

}


export const config = {
    matcher: ['/seller/:path*', '/account/:path*'],
};
