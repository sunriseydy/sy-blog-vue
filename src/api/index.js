import qs from 'qs';

let vm = {};

export default {

  getSiteInfo() {
    return vm.$http.get('/site-info');
  },

  getPosts(query) {
    return vm.$http.get('/post' + qs.stringify(query, {
      addQueryPrefix: true,
    }));
  },

  getPostById(id) {
    return vm.$http.get(`/post/${id}`);
  },

  getPostsByCategory(query) {
    return vm.$http.get('/post/category' + qs.stringify(query, {
      addQueryPrefix: true,
    }));
  },

  getPostsByTag(query) {
    return vm.$http.get('/post/tag' + qs.stringify(query, {
      addQueryPrefix: true,
    }));
  },

  getCategoryTree() {
    return vm.$http.get('/category/tree');
  },

  getTags() {
    return vm.$http.get('/tag');
  },

  getPageBySlug(slug) {
    return vm.$http.get('/page/slug' + qs.stringify({slug}, {
      addQueryPrefix: true,
    }));
  },

  setVm(vue) {
    vm = vue;
  },
};
