import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        console.log('Request made with ', config);
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        console.log('Response received ', response);
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        console.error('Error occurred in the API call:', error);
        if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refresh_token');

            try {
            const response = await axiosInstance.post(
             '/token/refresh/',
             { refresh: refreshToken }
            );
            console.log('Token refreshed successfully:', response.data.access);
            localStorage.setItem('access_token', response.data.access);
            originalRequest.headers['Authorization'] =
            `Bearer ${response.data.access}`;

            return axiosInstance(originalRequest);

            } catch (error) {
               localStorage.removeItem('access_token');
               localStorage.removeItem('refresh_token');
               window.location.href = '/login';
               console.error('Error occurred in the API call:', error); 
           }
       }
        return Promise.reject(error);
    }
);


export default axiosInstance;