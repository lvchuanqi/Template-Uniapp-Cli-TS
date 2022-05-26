import axios from 'axios';

/**
 * Axios Common
 */
const instance = axios.create({
	/*请求基础路径*/
	baseURL: import.meta.env.VITE_APP_SERVER_URL + import.meta.env.VITE_APP_SERVER_NAME,

	/*创建自定义请求 - 鉴于此项目使用uni.request*/
	adapter(config) {
		console.info('HTTP REQUEST ↓↓');
		console.info(config);

		const { method, data, headers, baseURL, url } = config;
		return new Promise((resolve, reject) => {
			/*uni 网络请求处理*/
			uni.request({
				method: method?.toUpperCase() as 'GET' | 'POST',
				url: baseURL! + url,
				header: headers,
				data,
				success: (res: any) => {
					console.log('HTTP SUCCESS ↓↓');
					console.log(res);
					resolve(res);
				},
				fail: (err: any) => {
					reject(err);
				},
			});
		});
	},
});

/**
 * Axios Request 全局请求拦截器
 */
instance.interceptors.request.use(config => {
	const { method, params } = config;

	/*请求头特殊处理 */
	const headers: any = {};
	headers['Content-type'] = 'application/json;';

	return {
		...config,
		headers,
	};
});

enum HTTP_STATUS {
	OK = 200,
	ERROR = 500,
}

/**
 * Axios Response 全局响应拦截器
 */
instance.interceptors.response.use(res => {

	if ((res.status || res.statusCode) === HTTP_STATUS.OK) {
		return res.data;
	}
	return Promise.reject(res);
});

export default instance;
