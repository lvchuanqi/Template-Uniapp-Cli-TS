import http from '../http';

/**
 * 用户登录
 * @param username
 * @param password
 * @returns
 */
const login = (username: string, password: string) => {
	return http.post('/login', {
		username,
		password,
	});
};

export default {
	login,
};
