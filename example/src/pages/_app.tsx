import '../styles/util.css';
import { NextjsCurtain } from '@oak-digital/nextjs-curtain';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextjsCurtain curtainClassName="bg-dark">
            <Component {...pageProps} />
        </NextjsCurtain>
    );
}
