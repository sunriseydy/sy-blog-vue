<template>
  <v-row>
    <v-col
        sm="2"
    >
      <content-catalog />
    </v-col>
    <v-col
        sm="8"
    >
      <article-detail />
    </v-col>
    <v-col
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
