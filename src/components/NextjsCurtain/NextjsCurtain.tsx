import { Curtain, CurtainProps } from '@oak-digital/react-curtain';
import { useRouter } from 'next/router.js';
import { FC, useEffect, useState } from 'react';

export type NextjsCurtainProps = Omit<CurtainProps, 'visible'>;

export const NextjsCurtain: FC<NextjsCurtainProps> = (props) => {
    const [visible, setVisible] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = (
            _url: string,
            {
                shallow,
            }: {
                shallow?: boolean;
            }
        ) => {
            if (shallow) {
                return;
            }
            setVisible(true);
        };

        const handleRouteChangeComplete = (
            _url: string,
            {
                shallow,
            }: {
                shallow?: boolean;
            }
        ) => {
            if (shallow) {
                return;
            }
            setVisible(false);
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeComplete);
        };
    }, []);

    return <Curtain {...props} visible={visible} />;
};
