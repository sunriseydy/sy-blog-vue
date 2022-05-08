import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import '@/plugins/vuetify-dialog';
import axios from '@/plugins/axios';
import api from '@/api';
import store from '@/store';

// import 'roboto-fontface/css/roboto/roboto-fontface.css';
// icon 包
import '@mdi/font/css/materialdesignicons.css';
// github markdown style
import 'github-markdown-css/github-markdown-dark.css'
// 代码高亮主题样式
import 'prismjs/themes/prism-tomorrow.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css'

Vue.config.productionTip = false;
const vue = new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
});
api.setVm(vue);
axios.setVm(vue);
vue.$mount('#app');
export default vue;
