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
              搜索：{{ searchString }}
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
import SideBar from '@/layouts/SideBar';
import ArticleArchive from '@/components/ArticleArchive';

export default {
  name: 'BlogSearch',
  components: {SideBar, ArticleArchive},
  computed: {
    searchString() {
      return this.$route.query.search;
    },
  },
};
</script>

<style scoped>

</style>
