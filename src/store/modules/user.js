export default {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        getUser: (state) => state.user,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
    },
    actions: {
        setUser({commit}, user) {
            commit('SET_USER', user);
        },
    },
};