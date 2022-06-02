import { createSSRApp } from 'vue';
//Vue3官方推荐的vuex的代替方案
import { createPinia } from 'pinia';

import App from './App.vue';
export function createApp() {
	const app = createSSRApp(App);
	app.use(createPinia());
	return {
		app,
	};
}
