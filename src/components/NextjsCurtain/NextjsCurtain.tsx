import { Curtain, CurtainProps } from '@oak-digital/react-curtain';
import { useRouter } from 'next/router.js';
import { FC, useEffect, useRef, useState } from 'react';

export type NextjsCurtainProps = Omit<CurtainProps, 'visible'> & {
    /**
     * A function to determine whether the curtain should be visible for the given route
     * It is recommended to return false for shallow routes
     * Please use useCallback or useMemo to memoize the function
     * By default it is a function that will return true if the route is not shallow
     */
    routeMatcher?: (route: string, options: { shallow?: boolean }) => boolean;
};

const defaultRouteMatcher: Exclude<NextjsCurtainProps['routeMatcher'], undefined> = (_url, { shallow }) => {
    if (shallow) {
        return false;
    }
    return true;
};

export const NextjsCurtain: FC<NextjsCurtainProps> = ({ routeMatcher = defaultRouteMatcher, ...curtainProps }) => {
    const [visible, setVisible] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = (
            url: string,
            options: {
                shallow?: boolean;
            }
        ) => {
            if (!routeMatcher(url, options)) {
                return;
            }
            setVisible(true);
        };

        const handleRouteChangeComplete = (
            url: string,
            options: {
                shallow?: boolean;
            }
        ) => {
            if (!routeMatcher(url, options)) {
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
    }, [routeMatcher]);

    return <Curtain {...curtainProps} visible={visible} />;
};
