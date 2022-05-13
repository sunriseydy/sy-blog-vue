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
  name: 'BlogTag',
  components: {SideBar, ArticleArchive},
  watch: {
    '$route': function() {
      this.$store.commit('updateTagSlug', this.$route.params.slug);
    },
  },
  created() {
    this.$store.commit('updateTagSlug', this.$route.params.slug);
  }
}
</script>

<style scoped>

</style>
