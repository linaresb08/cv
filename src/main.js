import '@fortawesome/fontawesome-free/css/all.min.css';
import Vue from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './fa-icons';

Vue.config.productionTip = false;
Vue.component('fa-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
