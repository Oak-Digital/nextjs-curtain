import { Curtain, CurtainProps } from '@oak-digital/react-curtain';
import { NextRouter, useRouter } from 'next/router.js';
import { FC, useEffect, useState, Context, ReactNode, useCallback } from 'react';

export type NextjsCurtainProps = Omit<CurtainProps, 'visible'> & {
    /**
     * A function to determine whether the curtain should be visible for the given route
     * It is recommended to return false for shallow routes
     * Please use useCallback or useMemo to memoize the function
     * By default it is a function that will return true if the route is not shallow
     */
    routeMatcher?: (route: string, options: { shallow?: boolean }) => boolean;
    /**
     * The nextjs router context. You should import it in your current component and pass it to this component. This is needed since the router context is exported at different locations in different next versions.
     *
     * @example import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
     * @example import { RouterContext } from 'next/dist/shared/router-context.shared-runtime'
     */
    routerContext?: Context<NextRouter | null> | Context<NextRouter>;
};

const defaultRouteMatcher: Exclude<NextjsCurtainProps['routeMatcher'], undefined> = (_url, { shallow }) => {
    if (shallow) {
        return false;
    }
    return true;
};

export const NextjsCurtain: FC<NextjsCurtainProps> = ({
    routeMatcher = defaultRouteMatcher,
    childrenWrapper,
    routerContext: RouterContext,
    ...curtainProps
}) => {
    const [visible, setVisible] = useState(false);

    const router = useRouter();

    const internalChildrenWrapper = useCallback(
        (children: ReactNode) => {
            // return children;
            if (!RouterContext) {
                return children;
            }
            return (
                <RouterContext.Provider value={{ ...router }}>
                    {childrenWrapper ? childrenWrapper(children) : children}
                </RouterContext.Provider>
            );
        },
        [router, RouterContext, childrenWrapper]
    );

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

    return <Curtain {...curtainProps} childrenWrapper={internalChildrenWrapper} visible={visible} />;
};
