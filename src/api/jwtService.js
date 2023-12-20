import router from '@/router';
import jwtStorage from "@/storage/jwtStorage";
import {axiosInstance} from "@/api/index";
import store from '@/store/index'

class JwtService {

    axiosInstance
    //대기요청 상태인지 체크 toggle 변수
    isTokenRefreshCheck
    //콜백함수 타입의 배열
    refreshSubscribers = []
    constructor(axiosInstance) {

        this.axiosInstance = axiosInstance;
        /**
         * request interceptor
         */
        this.axiosInstance.interceptors.request.use((config) => {
                store.dispatch("loadingStore/onLoading").then()
                let accessToken = jwtStorage.getAccessToken();
                //토큰이 localstorage 에 있을 때만 header 에 토큰을 심어둔다.
                if (accessToken) {
                    //config.headers.Authorization 과 axios.defaults.headers.common.Authorization 은 서로 다르다.
                    config.headers.access_token = accessToken;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            });


        /**
         * response interceptor
         */
        this.axiosInstance.interceptors.response.use((response) => {
                store.dispatch("loadingStore/offLoading").then()
                return response;
            },
            async (error) => {
                store.dispatch("loadingStore/offLoading").then()
                const {status, config} = error.response;
                const responseConfig = config;
                if (status === 401) {
                    //로그인 실패시~
                    if (!this.isTokenRefreshCheck) {
                        // isTokenRefreshing 이 false 인 경우에만 token refresh 요청
                        this.isTokenRefreshCheck = true;
                        // refresh token 요청
                        this.axiosInstance.post('/user/accessToken',
                            {
                                refreshToken: jwtStorage.getRefreshToken()
                            })
                            .then((res) => {
                                this.isTokenRefreshCheck = false;
                                let token = res.data.body;
                                this.setTokens(token);

                                setTimeout(async () => {
                                    // 새로운 토큰으로 지연되었던 요청 진행
                                    await this.getTokenRefreshed(token.accessToken);
                                    //저장 배열 초기화
                                    // await this.changeProgressStatus('OFF')
                                    await this.removeRefreshSubscribers();
                                }, 700);

                            }).catch((error) => {
                            const {message, status} = error.data;
                            // console.log( error, code, message );
                            // refresh token 정보도 만료 되었을 때 로그인 페이지로 보낸다.
                            if (status === 401 && message === 'token expired') {
                                alert('사용자 정보가 만료되었습니다.\\n 다시 로그인 해주세요');
                                //로그아웃
                                this.shouldUnAuthorized();
                            }
                        });

                    }

                    //  token 이 재발급 되는 동안의 요청은 refreshSubscribers 에 저장
                    return new Promise((resolve) => {
                        //getTokenRefreshed 에서 전달된 token 을  내부에서 refreshSubscribers( 콜백함수 저장한 배열 ) 를 forEach 로 순환 대입( 전달된 token) 실행시킨다.
                        this.addRefreshSubscriber((token) => {
                            responseConfig.headers.Authorization = token
                            resolve(this.axiosInstance(responseConfig));
                        });
                    });
                }
                // Do something with response error
                return Promise.reject(error);
            });
    }


    /**
     * 새로 발급 받는 token 재지정.
     * @param token
     * @param refreshToken
     */
    async setTokens(token) {
        await jwtStorage.setTokens(token)
    }

    /**
     * 콜백함수 타입의 배열 초기화
     */
    removeRefreshSubscribers() {
        this.refreshSubscribers = [];
    }

    /**
     * 실행 콜백함수 배열 대입.
     * @param callback
     */
    addRefreshSubscriber(callback) {
        this.refreshSubscribers.push(callback);
    }

    /**
     * 배열에 저장된 콜백함수( addRefreshSubscriber ) 실행.
     * @param token
     */
    getTokenRefreshed(token) {
        this.refreshSubscribers.forEach((callback) => callback(token));
    }

    /**
     * 로그아웃 시키기
     */
    shouldUnAuthorized() {
        store.dispatch("userStore/dropUser")
            .then(() => router.push('/login'))
    }
}

export default new JwtService(axiosInstance)