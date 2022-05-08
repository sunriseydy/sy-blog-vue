import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toc: [],
    titleColHeight: 0,
    activeToc: [],
  },
  mutations: {
    updateToc(state, payload) {
      state.toc = payload.c || [];
    },
    updateTitleColHeight(state, payload) {
      state.titleColHeight = payload || 0;
    },
    updateActiveToc(state, payload) {
      state.activeToc = payload || [];
    },
  },
});
