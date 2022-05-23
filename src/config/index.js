export default {
  apiHost: process.env.VUE_APP_API_HOST || 'https:/blog-api.sunriseydy.dev',
  title: process.env.VUE_APP_TITLE || 'sy-blog-vue',
  mainColorClass: 'grey darken-4',
  hoverColorClass: 'grey darken-3',
  postLink: process.env.VUE_APP_POST_LINK || 'slug',
  menus: [
    {
      name: '关于',
      path: '/about',
      target: null,
      attrTitle: '关于我和此站点',
    },
    {
      name: '其他',
      path: '/others',
      target: null,
      attrTitle: '其他',
    },
  ],
};
