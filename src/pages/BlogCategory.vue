<template>
  <v-row>
    <v-col
        cols="1"
        sm="8"
        offset-sm="2"
    >
      <article-archive v-if="categoryId !== 0" :category-id="categoryId" />
    </v-col>
    <v-col
        cols="1"
        sm="2"
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
    categoryFullSlug() {
      return this.$store.state.categoryFullSlug;
    },
    categoryTree() {
      return this.$store.state.categoryTree;
    },
    categoryArray() {
      return this.getCategoryArray();
    },
    categoryId() {
      return this.getCategoryId();
    },
  },
  methods: {
    getCategoryArray() {
      let categoryArray = [];
      let getChildArray = (arr) => {
        arr.forEach(o => {
          categoryArray.push(o);
          if (o.children && o.children.length !== 0) {
            getChildArray(o.children);
          }
        });
      };
      getChildArray(this.categoryTree);
      return categoryArray;
    },
    getCategoryId() {
      if (this.categoryTree.length === 0 || this.categoryFullSlug === '') {
        return 0;
      }
      let c = this.categoryArray.find(c => c.fullSlug === this.categoryFullSlug);
      return c ? c.id : 0;
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
