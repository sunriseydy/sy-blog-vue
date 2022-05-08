import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toc: [],
  },
  mutations: {
    updateToc(state, payload) {
      state.toc = payload.c || [];
    },
  },
});
