<template>
  <v-row>
    <v-col
        lg="2"
        v-if="$vuetify.breakpoint.lgAndUp"
    >
      <content-catalog />
    </v-col>
    <v-col
        lg="8"
    >
      <article-detail is-page />
    </v-col>
    <v-col
        lg="2"
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
  name: 'BlogPage',
  components: {SideBar, ContentCatalog, ArticleDetail},
}
</script>

<style scoped>

</style>
