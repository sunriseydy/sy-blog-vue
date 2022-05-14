<template>
  <v-row>
    <v-col
        lg="9"
    >
      <v-row>
        <v-col cols="12">
          <v-card
              outlined
              rounded="lg"
              elevation="12"
          >
            <v-banner
                shaped
            >
              分类：{{category.name}}
            </v-banner>
          </v-card>
        </v-col>
        <v-col cols="12">
          <article-archive />
        </v-col>
      </v-row>
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
import SideBar from '@/components/SideBar';

export default {
  name: 'BlogCategory',
  components: {SideBar, ArticleArchive},
  computed: {
    category() {
      return this.$store.getters.getCategory;
    },
  },
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
