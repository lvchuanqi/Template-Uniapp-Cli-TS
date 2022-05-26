/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

/**
 * Vite 环境变量
 */
interface ImportMetaEnv {
	/*接口服务地址*/
	readonly VITE_APP_SERVER_URL: string;
	/*接口服务名称(项目名)*/
	readonly VITE_APP_SERVER_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
