import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	server: {
		port: 8080,
		host: '0.0.0.0',
		proxy: {
			'/api/': {
				target: 'https://xxxx',
				changeOrigin: true,
				rewrite: p => p.replace(/^\/api/, ''),
			},
		},
	},
	resolve: {
		/*定义别名以及对应路径*/
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
});
