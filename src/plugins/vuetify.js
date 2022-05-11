import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import zhHans from 'vuetify/lib/locale/zh-Hans';
import config from '@/config';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: {zhHans},
    current: 'zhHans',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        'primary': '#2196F3',
        'secondary': '#424242',
        'accent': '#FF4081',
        'error': '#FF5252',
        'info': '#2196F3',
        'success': '#4CAF50',
        'warning': '#FB8C00',
        'main': config.mainColorClass,
        'hover': config.hoverColorClass,
      },
    },
  },
});
