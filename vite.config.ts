import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.GITHUB_ACTIONS ? '/devprofile/' : '/',
    plugins: [plugin()],
    server: {
        port: 65529,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
