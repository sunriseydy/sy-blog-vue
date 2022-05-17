export default {
  apiHost: process.env.VUE_APP_API_HOST || 'https:/blog-api.sunriseydy.dev',
  title: process.env.VUE_APP_TITLE || 'sy-blog-vue',
  mainColorClass: 'grey darken-4',
  hoverColorClass: 'grey darken-3',
  postLink: process.env.VUE_APP_POST_LINK || 'slug',
};
