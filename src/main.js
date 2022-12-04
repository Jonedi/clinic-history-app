import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { camelCase, upperFirst } from "lodash";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { auth } from './firebase'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCompositionAPI from "@vue/composition-api";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors",
});
Vue.use(VueCompositionAPI);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

//Automatic components
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

auth.onAuthStateChanged(user => {
  if (user) {
    const ObsUsuario = {
      email:  user.email,
      uid:    user.uid
    }
    store.dispatch('detectarUsuario', ObsUsuario)
  } else {
    store.dispatch('detectarUsuario', user)
  }
  
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
})

