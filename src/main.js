import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";

library.add(fas)
library.add(far)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
