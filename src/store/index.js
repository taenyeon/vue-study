import Vue from "vue";
import Vuex from "vuex";
import userStore from './modules/userStore'
import loadingStore from "@/store/modules/loadingStore";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        namespace: true,
        userStore,
        loadingStore
    },
});
