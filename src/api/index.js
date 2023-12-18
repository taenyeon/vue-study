import jwtStorage from "@/storage/jwtStorage";
import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        let accessToken = jwtStorage.getAccessToken()
        config.headers['Content-Type'] = 'application/json';
        config.headers['access_token'] = accessToken;
        return config;
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        let data = response.data;
        let resultCode = data.resultCode;
        let resultMessage = data.resultMessage;
        if (resultCode !== "SUCCESS") {
            // 실패 케이스
            alert(`resultCode : ${resultCode}\n
             resultMessage : ${resultMessage}`)
        }
            return response;
    },
    (error) => {
        let originalConfig = error.config;
        if (!originalConfig.retried) {
            originalConfig.retried = true
            if (error.status === 401) {
                let refreshToken = jwtStorage.getRefreshToken()
                if (refreshToken != null) {
                    axiosInstance.get('/accessToken').then(response =>
                        jwtStorage.updateAccessToken(response.data.body.accessToken)
                    );
                    return axiosInstance(originalConfig)
                }
            }
        }
        alert('server Error!!')
    }
);