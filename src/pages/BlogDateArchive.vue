<template>
  <v-row>
    <v-col
        sm="9"
    >
      <article-archive />
    </v-col>
    <v-col
        sm="3"
    >
      <side-bar />
    </v-col>
  </v-row>
</template>

<script>
import ArticleArchive from '@/components/ArticleArchive';
import SideBar from '@/components/SideBar';
export default {
  name: 'BlogDateArchive',
  components: {SideBar, ArticleArchive},
}
</script>

<style scoped>

</style>
