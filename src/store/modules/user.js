export default {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {},
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        DROP_USER(state) {
            state.user = null
        }
    },
    actions: {
        setUser({commit}, user) {
            commit('SET_USER', user);
        },
        dropUser({commit}) {
            commit('DROP_USER')
        }
    },
};