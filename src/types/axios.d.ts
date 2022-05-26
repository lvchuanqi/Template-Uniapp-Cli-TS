/**
 * Axios 类型扩展
 */
import axios from 'axios';
declare module 'axios' {
	interface IAxios {
		statusCode: number;
	}
	export interface AxiosResponse<T = any> extends IAxios {}
}
