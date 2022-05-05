import vm from '@/main';
import qs from 'qs';

export default {
  async getPosts(query) {
    return vm.$http.get('/post' + qs.stringify(query, {
      addQueryPrefix: true,
    }));
  },
};
