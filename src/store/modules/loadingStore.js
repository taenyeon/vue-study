export default {
    namespaced: true,
    state: {
        is_loading: false
    },
    getters: {},
    mutations: {
        ON_LOADING(state) {
            state.is_loading = true
        },
        OFF_LOADING(state) {
            state.is_loading = false
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