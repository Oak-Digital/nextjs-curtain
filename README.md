# Nextjs curtain

A nextjs wrapper for [`@oak-digital/react-curtain`](https://github.com/oak-Digital/react-curtain) which triggers on page changes.

## Installation

`react-curtain` depends on framer-motion as a peer dependency so it is important that you install that for your project as well

```
pnpm install @oak-digital/nextjs-curtain framer-motion
```

## Usage

### Pages router

In your `pages/_app.tsx` file, wrap your components in the `<NextjsCurtain>` component. Don't forget to give the curtain a background color or it will be invisible

```ts
// pages/_app.tsx
import { NextjsCurtain } from '@oak-digital/nextjs-curtain';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextjsCurtain curtainClassName="bg-dark">
            <Component {...pageProps} />
        </NextjsCurtain>
    );
}
```

### App router

TODO
