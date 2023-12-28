import BaseApi from "@/api/BaseApi";
import jwtStorage from "@/storage/JwtStorage";
import router from "@/router";
import store from "@/store";

class UserApi {

    async getUserInfo() {
        let api = BaseApi.axiosInstance;
        api.get('/user')
            .then((response) => {
                if (response.data.resultCode === 'SUCCESS') {
                    store.dispatch("userStore/setUser", response.data.body)
                }
            }).catch(() => {
        })
    }

    login(username, password) {
        let api = BaseApi.axiosInstance;
        api.post(
            '/user/login',
            {
                username: username,
                password: password,
            }
        ).then((response) => {
            if (response.data.resultCode !== 'SUCCESS') {
                alert('login fail!!')
            } else {
                jwtStorage.setTokens(response.data.body)
                    .then(this.getUserInfo()
                        .then(router.push('/')
                        )
                    )
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    logout() {
        if (jwtStorage.getRefreshToken() === null) {
            store.dispatch("userStore/dropUser")
        } else {
            let api = BaseApi.axiosInstance;
            api.delete('/user/logout')
                .then(() => {
                    jwtStorage.dropTokens()
                    store.dispatch("userStore/dropUser")
                        .then(router.push('/'))
                })
                .catch(() => {
                    jwtStorage.dropTokens()
                    store.dispatch("userStore/dropUser")
                        .then(router.push('/'))
                })
        }
    }

}

export default new UserApi()


