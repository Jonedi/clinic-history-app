import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCompositionAPI from '@vue/composition-api'
import VeeValidate from "vee-validate";

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors"
});
Vue.use(VueCompositionAPI)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
