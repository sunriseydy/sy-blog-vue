import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import config from '@/config';
import vm from '@/main';

axios.defaults.baseURL = config.apiHost;
// 注册全局的http返回拦截器
// 全局异常处理
axios.interceptors.response.use(response => {
  // 2xx 范围内的状态码都会触发该函数。
  if (response.data && !response.data.success) {
    console.log(response);
    vm.$dialog.notify.error('Error:' + response.data.message, {
      position: 'bottom-right',
    });
    return Promise.reject(response.data.message);
  } else {
    return response;
  }
}, (error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  console.log(error.toJSON());
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    vm.$dialog.notify.error(('Error: ' + error.response.status + ': ' +
        (error.response.data || '请求失败')), {
      position: 'bottom-right',
    });
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
    // 而在node.js中是 http.ClientRequest 的实例
    vm.$dialog.notify.error('Error:' + error.message, {
      position: 'bottom-right',
    });
  } else {
    // 发送请求时出了点问题
    vm.$dialog.notify.error('Error:' + error.message, {
      position: 'bottom-right',
    });
  }
  return Promise.reject(error);
}));

Vue.use(VueAxios, axios);
