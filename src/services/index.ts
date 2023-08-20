import axios from 'axios';

const axiosClient = axios.create({
  headers: {
    Accept: 'applications/json',
    'Content-Type': 'application/json',
  },
});

// axiosClient.interceptors.request.use(
// 	(config) => {
// 		const accessToken = localStorage.getItem('accessToken');
// 		accessToken &&
// 			(config.headers.Authorization = `Bearer ${accessToken as string}`);

// 		return config;
// 	},
// 	async (error) => {
// 		return await Promise.reject(error);
// 	}
// );

// axiosClient.interceptors.response.use(
// 	async (response) => {
// 		const res = response.data;
// 		return response
// 	},
// 	async (error) => {
// 		const refreshToken = localStorage.getItem('refreshToken');
// 		const {
// 			config: originalRequest,
// 			response: { status },
// 		} = error;
// 		switch (status) {
// 			case 401:

// 			default:
// 				break;
// 		}
// 	}
// );

export default axiosClient;
