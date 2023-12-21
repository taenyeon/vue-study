import UserStorage from "@/storage/UserStorage";

export default {
    namespaced: true,
    state: {
        user: UserStorage.getUserInfo(),
    },
    getters: {},
    mutations: {
        SET_USER(state, user) {
            UserStorage.setUserInfo(user)
                .then(state.user = user)
        },
        DROP_USER(state) {
            UserStorage.dropUserInfo()
                .then(state.user = null)
        },
        LOAD_USER(state) {
            state.user = UserStorage.getUserInfo()
        }
    },
    actions: {
        setUser({commit}, user) {
            commit('SET_USER', user);
        },
        dropUser({commit}) {
            commit('DROP_USER')
        },
        loadUser({commit}) {
            commit('LOAD_USER')
        }
    },
};