import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import '@/plugins/vuetify-dialog';
import axios from '@/plugins/axios';
import api from '@/api';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
const vue = new Vue({
  vuetify,
  router,
  render: h => h(App),
});
api.setVm(vue);
axios.setVm(vue);
vue.$mount('#app');
export default vue;
