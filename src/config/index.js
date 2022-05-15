console.log(process.env);
export default {
  apiHost: process.env.VUE_APP_API_HOST || 'http://192.168.31.59:8080',
  title: process.env.VUE_APP_TITLE || 'sy-blog-vue',
  mainColorClass: 'grey darken-4',
  hoverColorClass: 'grey darken-3',
  postLink: process.env.VUE_APP_POST_LINK || 'slug',
};
