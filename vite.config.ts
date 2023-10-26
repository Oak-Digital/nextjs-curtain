import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

export default defineConfig({
    /* root: 'demo', */
    plugins: [
        dts({
            rollupTypes: true,
        }),
        react(),
    ],
    build: {
        outDir: 'dist',
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'NextjsCurtain',
            // the proper extensions will be added
            fileName: 'main',
            formats: ['es', 'umd', 'cjs'],
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'framer-motion',
                'next',
                'next/router',
                'next/router.js',
                'react/jsx-runtime',
                ...Object.keys(pkg.dependencies || {}),
                ...Object.keys(pkg.peerDependencies || {}),
            ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'framer-motion': 'framer-motion',
                    next: 'next',
                    'next/router': 'next/router',
                    'next/router.js': 'next/router.js',
                },
            },
        },
    },
});
