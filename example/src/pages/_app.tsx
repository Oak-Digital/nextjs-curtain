import { NextjsCurtain } from '@oak-digital/nextjs-curtain';
import type { AppProps } from 'next/app';
import '@oak-digital/react-curtain/dist/style.css';
import '../styles/util.css';
import { useCallback } from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

export default function App({ Component, pageProps }: AppProps) {
    const routeMatcher = useCallback((route: string) => {
        return route.startsWith('/about');
    }, []);
    return (
        <div style={{ position: 'relative' }}>
            <NextjsCurtain routerContext={RouterContext} routeMatcher={routeMatcher} duration={10} curtainClassName="bg-dark z-10" position="absolute">
                <Component {...pageProps} />
            </NextjsCurtain>
        </div>
    );
}
