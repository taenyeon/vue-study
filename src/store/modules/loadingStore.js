export default {
    namespaced: true,
    state: {
        isLoading: false
    },
    getters: {},
    mutations: {
        ON_LOADING(state) {
            state.isLoading = true
        },
        OFF_LOADING(state) {
            state.isLoading = false
        }
    },
    actions: {
        onLoading({commit}) {
            commit('ON_LOADING');
        },
        offLoading({commit}) {
            commit('OFF_LOADING')
        }
    },
};