import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from "@/views/BlogHome";
import BlogArticle from "@/views/BlogArticle";
import BlogCategory from '@/views/BlogCategory';
import BlogDateArchive from '@/views/BlogDateArchive';
import BlogTag from '@/views/BlogTag';
import BlogUser from '@/views/BlogUser';
import BlogPage from '@/views/BlogPage';

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
