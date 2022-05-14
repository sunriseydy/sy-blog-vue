import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    siteInfo: {},
    toc: [],
    titleOffsetTop: 0,
    categoryTree: [],
    categoryFullSlug: '',
    tagSlug: '',
    tags: [],
    showDrawer: false,
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
    getCategoryArray: state => {
      if (state.categoryTree.length === 0) {
        return [];
      }

      let categoryArray = [];

      let getChildArray = (arr) => {
        arr.forEach(o => {
          categoryArray.push(o);
          if (o.children && o.children.length !== 0) {
            getChildArray(o.children);
          }
        });
      };
      getChildArray(state.categoryTree);
      return categoryArray;
    },
    getCategoryId: (state, getters) => {
      if (state.categoryTree.length === 0 || state.categoryFullSlug === '') {
        return 0;
      }
      let c = getters.getCategoryArray.find(
          c => c.fullSlug === state.categoryFullSlug);
      return c ? c.id : 0;
    },
    getCategory: (state, getters) => {
      let id = getters.getCategoryId;
      return id === 0 ? {} : getters.getCategoryArray.find(c => c.id === id);
    },
    tagId: state => {
      if (state.tags.length === 0 || state.tagSlug === '') {
        return 0;
      } else {
        let tag = state.tags.find(t => t.slug === state.tagSlug);
        return tag ? tag.id : 0;
      }
    },
    tag: (state, getters) => {
      let id = getters.tagId;
      return id === 0 ? {} : state.tags.find(t => t.id === id);
    }
  },
  mutations: {
    updateSiteInfo(state, payload) {
      state.siteInfo = payload || {};
    },
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
    updateTitleOffsetTop(state, payload) {
      state.titleOffsetTop = payload || 0;
    },
    toggleDrawer(state, payload) {
      state.showDrawer = payload || false;
    },
  },
});
