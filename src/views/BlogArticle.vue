<template>
  <v-row>
    <v-col
        cols="1"
        sm="2"
    >
      <content-catalog />
    </v-col>
    <v-col
        cols="1"
        sm="8"
    >
      <article-detail />
    </v-col>
    <v-col
        cols="1"
        sm="2"
    >
      <side-bar />
    </v-col>
  </v-row>
</template>

<script>
import ContentCatalog from '@/components/ContentCatalog';
import ArticleDetail from '@/components/ArticleDetail';
import SideBar from '@/components/SideBar';

export default {
  name: 'BlogArticle',
  components: {SideBar, ArticleDetail, ContentCatalog},
};
</script>

<style scoped>

</style>
