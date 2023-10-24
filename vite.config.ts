import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    /* root: 'demo', */
    plugins: [
        react(),
        dts({
            rollupTypes: true,
        }),
    ],
    build: {
        outDir: 'dist',
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/main.ts'),
            name: '@oak-digital/nextjs-curtain',
            // the proper extensions will be added
            fileName: 'main',
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'framer-motion', 'next', 'next/router'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'framer-motion': 'framer-motion',
                    next: 'next',
                    'next/router': 'next/router',
                },
            },
        },
    },
});
