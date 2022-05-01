import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from "@/views/BlogHome";

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BlogHome
  },
]

export default new Router({
  mode: 'history',
  routes
})
