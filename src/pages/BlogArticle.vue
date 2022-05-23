<template>
  <v-row>
    <v-col
        lg="2"
        v-if="$vuetify.breakpoint.lgAndUp && hasToc"
    >
      <content-catalog />
    </v-col>
    <v-col
        :lg="hasToc ? 8 : 9"
    >
      <article-detail is-post />
    </v-col>
    <v-col
        :lg="hasToc ? 2 : 3"
        v-if="$vuetify.breakpoint.lgAndUp"
    >
      <side-bar />
    </v-col>
  </v-row>
</template>

<script>
import ContentCatalog from '@/components/ContentCatalog';
import ArticleDetail from '@/components/ArticleDetail';
import SideBar from '@/layouts/SideBar';

export default {
  name: 'BlogArticle',
  components: {SideBar, ArticleDetail, ContentCatalog},
  computed: {
    hasToc() {
      return this.$store.state.toc.length !== 0;
    },
  },
};
</script>

<style scoped>

</style>
