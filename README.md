# sy-blog-vue

`sy-blog-vue` 是 [`sy-blog-java`](https://github.com/sunriseydy/sy-blog-java) 的 Vue 前端应用，即一个前后端分离的博客的前端。使用了 `Material Design` 样式。

`sy-blog-vue` 使用了 Vue + VueRoute + Vuex + Vuetify

## 预览

[https://blog.sunriseydy.dev/](https://blog.sunriseydy.dev/)

## 配置

目前支持的配置在 `src/config/index.js`

|名称|描述|默认值|
|:---|:---|:---|
|apiHost|后端接口HOST,取值为环境变量 `VUE_APP_API_HOST`|https:/blog-api.sunriseydy.dev|
|title|浏览器窗口标题,取值为环境变量 `VUE_APP_TITLE`|sy-blog-vue|
|postLink|文章链接地址类型,取值为环境变量 `VUE_APP_POST_LINK`|slug|

## 运行

```bash
yarn install
yarn serve
```

## 打包

```bash
yarn install
yarn build
```
