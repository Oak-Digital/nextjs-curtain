import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';

export default defineConfig({
    /* root: 'demo', */
    plugins: [react()],
    build: {
        outDir: 'demo-dist',
    },
});
