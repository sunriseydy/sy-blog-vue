import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toc: [],
    categoryTree: [],
    categoryFullSlug: '',
    tagSlug: '',
    tags: [],
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
    tagId: state => {
      if (state.tags.length === 0 || state.tagSlug === '') {
        return 0;
      } else {
        let tag = state.tags.find(t => t.slug === state.tagSlug);
        return tag ? tag.id : 0;
      }
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
    updateTags(state, payload) {
      state.tags = payload || [];
    },
    updateTagSlug(state, payload) {
      state.tagSlug = payload || '';
    },
  },
});
