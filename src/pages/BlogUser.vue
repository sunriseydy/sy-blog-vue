<template>
  <v-row>
    <v-col
        lg="9"
    >
      <article-archive />
    </v-col>
    <v-col
        lg="3"
        v-if="$vuetify.breakpoint.lgAndUp"
    >
      <side-bar />
    </v-col>
  </v-row>
</template>

<script>
import ArticleArchive from '@/components/ArticleArchive';
import SideBar from '@/layouts/SideBar';
export default {
  name: 'BlogUser',
  components: {SideBar, ArticleArchive},
}
</script>

<style scoped>

</style>
