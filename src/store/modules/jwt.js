export default {
    namespace: true,
    state: {
        accessToken: null,
        refreshToken: null,
    },
    getters: {
        getAccessToken: (state) => state.accessToken,
        getRefreshToken: (state) => state.refreshToken,
    },
    mutations: {
        SET_ACCESS_TOKEN(state, accessToken) {
            state.accessToken = accessToken;
        },
        SET_REFRESH_TOKEN(state, refreshToken) {
            state.refreshToken = refreshToken;
        },
        SET_TOKEN(state, jwtToken) {
            state.accessToken = jwtToken.accessToken;
            state.refreshToken = jwtToken.refreshToken;
        }
    },
    actions: {
        setAccessToken({commit}, accessToken) {

            commit('SET_ACCESS_TOKEN', accessToken);
        },
        setRefreshToken({commit}, refreshToken) {
            commit('SET_REFRESH_TOKEN', refreshToken);
        },
        setToken({commit}, jwtToken) {
            commit('SET_TOKEN', jwtToken);
        },
    },
};