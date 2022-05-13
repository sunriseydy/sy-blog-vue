<template>
  <v-row>
    <v-col
        lg="9"
    >
      <article-archive />
    </v-col>
    <v-col
        lg="3"
    >
      <side-bar />
    </v-col>
  </v-row>
</template>

<script>
import ArticleArchive from '@/components/ArticleArchive';
import SideBar from '@/components/SideBar';

export default {
  name: 'BlogCategory',
  components: {SideBar, ArticleArchive},
  watch: {
    '$route': function() {
      this.$store.commit('updateCategoryFullSlug', this.$route.params.fullSlug);
    },
  },
  created() {
    this.$store.commit('updateCategoryFullSlug', this.$route.params.fullSlug);
  }
};
</script>

<style scoped>

</style>
