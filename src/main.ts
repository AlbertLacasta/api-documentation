// Application icons
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css"
import "@fortawesome/fontawesome-free/css/all.css"

// Vue composition API
import "./plugins/CompositionApi";

// Vue plugin
import Vue from "vue"

// Vuetify plugin
import vuetify from './plugins/vuetify';

// Global vuex store
import store from "./plugins/store";

// Vue router
import router from "./routes";

// Vue i18n plugin
import i18n from "./plugins/i18n";

// Vue app
import App from "./App.vue";


Vue.config.productionTip = false;

// Start Vue
new Vue({
  vuetify,
  render: h => h(App),
  router,
  store,
  i18n
}).$mount("#app");
