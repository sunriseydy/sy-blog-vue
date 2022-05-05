<template>
  <v-sheet
      min-height="200vh"
      rounded="lg"
  >
    <!--  -->
  </v-sheet>
</template>

<script>
import api from '@/api';

export default {
  name: 'ArticleArchive',
  data: () => ({
    page: 0,
    pageSize: 10,
    totalPages: 1,
    posts: [],
  }),
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts(page = 0) {
      // 获取文章
      if (page === this.totalPages) {
        this.$dialog.notify.info('已经最后一页了', {
          position: 'bottom-right',
          timeout: 3000,
        });
        return;
      }
      api.getPosts({
        page,
        pageSize: this.pageSize,
      }).then(res => {
        const {page, pageSize, totalPages, content} = res.data.data;
        this.page = page;
        this.pageSize = pageSize;
        this.totalPages = totalPages;
        this.posts = content;
      });
    },
    getNextPagePosts() {
      this.getPosts(this.page + 1);
    },
  },
};
</script>

<style scoped>

</style>
