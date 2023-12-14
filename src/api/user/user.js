import {axiosInstance} from '@/api';

const api = axiosInstance

function login(username, password) {
    api.post(
        '/login',
        {
            username: username,
            password: password
        }
    ).then((response) => {
        this.$store.commit('setToken', response.data.token);
    });
}

function logout() {
    api.delete(
        '/logout',
        {},
        {
            "refresh_token": this.$store.state.refreshToken
        }
    ).then(() => {
        this.$router.push('/')
    });
}


