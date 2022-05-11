import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toc: [],
    categoryTree: [],
    categoryFullSlug: '',
    tagId: 0,
  },
  getters: {
    tocArray: state => {
      let tocArray = [];
      let getChildArray = (arr) => {
        arr.forEach(o => {
          tocArray.push(o.n);
          if (o.c && o.c.length !== 0) {
            getChildArray(o.c);
          }
        });
      };
      getChildArray(state.toc);
      return tocArray;
    },
  },
  mutations: {
    updateToc(state, payload) {
      state.toc = payload.c || [];
    },
    updateCategoryTree(state, payload) {
      state.categoryTree = payload || [];
    },
    updateCategoryFullSlug(state, payload) {
      state.categoryFullSlug = payload || '';
    },
  },
});
