import Vue from 'vue'
import Vuex from 'vuex';
import App from '@/App.vue'
import router from '@/router.js'
import { store } from '@/store';
import ru from 'vee-validate/dist/locale/ru.js'
import VeeValidate, { Validator } from 'vee-validate'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/less/main.less'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrashAlt, faCalendarAlt)

Vue.use(Vuex)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VeeValidate)
Validator.localize('ru', ru)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
