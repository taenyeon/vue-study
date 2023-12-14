export const axiosInstance = this.$http.create({
    baseURL: process.env.BASE_API_URL,
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        let accessToken = this.$store.state.accessToken;
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
            alert(`resultCode : ${resultCode}
             resultMessage : ${resultMessage}`)
        } else {
            return response;
        }
    },
    (error) => {
        if (error.status === 401) {
            let refreshToken = this.$store.state.refreshToken;
            if (refreshToken != null) {
                axiosInstance.get('/accessToken').then(r =>
                    this.$store.dispatch('SET_ACCESS_TOKEN', r.data.accessToken)
                );

            }
        }
        return Promise.reject(error);
    }
);