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
    props: true,
    component: BlogArticle
  },
  {
    path: '/article/:slug+',
    name: 'articleSlug',
    props: true,
    component: BlogArticle
  },
  {
    path: '/category/:slug',
    name: 'categorySlug',
    props: true,
    component: BlogCategory
  },
  {
    path: '/archive/:year(\\d+)',
    name: 'dateArchiveYear',
    props: true,
    component: BlogDateArchive
  },
  {
    path: '/archive/:year(\\d+)/:month(\\d+)',
    name: 'dateArchiveMonth',
    props: true,
    component: BlogDateArchive
  },
  {
    path: '/tag/:slug',
    name: 'tagSlug',
    props: true,
    component: BlogTag
  },
  {
    path: '/user/:slug',
    name: 'userSlug',
    props: true,
    component: BlogUser
  },
  {
    path: '/:slug',
    name: 'pageSlug',
    props: true,
    component: BlogPage
  },
]

export default new Router({
  mode: 'history',
  routes
})
