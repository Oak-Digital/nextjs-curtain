import { NextjsCurtain } from '@oak-digital/nextjs-curtain';
import type { AppProps } from 'next/app';
import '@oak-digital/react-curtain/dist/style.css';
import '../styles/util.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div style={{ position: 'relative' }}>
            <NextjsCurtain duration={10} curtainClassName="bg-dark z-10" position="absolute">
                <Component {...pageProps} />
            </NextjsCurtain>
        </div>
    );
}
