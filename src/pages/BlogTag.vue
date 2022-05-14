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
              标签：{{ tag.name }}
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
  name: 'BlogTag',
  components: {SideBar, ArticleArchive},
  computed: {
    tag() {
      return this.$store.getters.tag;
    },
  },
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
