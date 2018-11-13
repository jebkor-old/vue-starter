Vue.config.productionTip = false;



// import dependencies
import '@babel/polyfill';
import Vue from 'vue';

import 'vuetify/src/stylus/app.styl';
import Vuetify from 'vuetify/lib';

import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCog, faFile, faDungeon } from '@fortawesome/free-solid-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';




// create instance of vue "plugins"
library.add(
  faCoffee, 
  faCog, 
  faDungeon,
  faFile, 
  faVuejs
);
Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    userdefined: "#ff00ff"
  }
});



// import files
import router from '../vue/router/Routes';
import store from "../vue/store/Store";
import App from '../vue/App.vue';



// Component registers
Vue.component('font-awesome-icon', FontAwesomeIcon);



// create SPA instance
const VueApp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



