import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from "@/pages/BlogHome";
import BlogArticle from "@/pages/BlogArticle";
import BlogCategory from '@/pages/BlogCategory';
import BlogDateArchive from '@/pages/BlogDateArchive';
import BlogTag from '@/pages/BlogTag';
import BlogUser from '@/pages/BlogUser';
import BlogPage from '@/pages/BlogPage';

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BlogHome
  },
  {
    path: '/article/:id(\\d+)',
    name: 'articleId',
    component: BlogArticle
  },
  {
    path: '/article/:slug+',
    name: 'articleSlug',
    component: BlogArticle
  },
  {
    path: '/category/:slug',
    name: 'categorySlug',
    component: BlogCategory
  },
  {
    path: '/archive/:year(\\d+)',
    name: 'dateArchiveYear',
    component: BlogDateArchive
  },
  {
    path: '/archive/:year(\\d+)/:month(\\d+)',
    name: 'dateArchiveMonth',
    component: BlogDateArchive
  },
  {
    path: '/tag/:slug',
    name: 'tagSlug',
    component: BlogTag
  },
  {
    path: '/user/:slug',
    name: 'userSlug',
    component: BlogUser
  },
  {
    path: '/:slug',
    name: 'pageSlug',
    component: BlogPage
  },
]

export default new Router({
  mode: 'history',
  routes
})
