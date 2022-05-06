import qs from 'qs';

let vm = {};

export default {
  async getPosts(query) {
    return vm.$http.get('/post' + qs.stringify(query, {
      addQueryPrefix: true,
    }));
  },

  async getPostById(id) {
    return vm.$http.get(`/post/${id}`);
  },

  setVm(vue) {
    vm = vue;
  },
};
