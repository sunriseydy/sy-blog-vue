console.log(process.env);
export default {
  apiHost: process.env.VUE_APP_API_HOST || 'http://localhost:8080',
  mainColorClass: 'grey darken-4',
  hoverColorClass: 'grey darken-3',
};
