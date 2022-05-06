<template>
  <v-card
      outlined
      rounded="lg"
      class="grey darken-4"
      elevation="12"
  >
    <v-img
        v-if="post.featuredMediaUrl"
        :src="post.featuredMediaUrl"
        class="ma-4"
    >
    </v-img>
    <v-card-title v-text="post.titleString" />

    <v-card-text>
      {{ post.contentString }}
    </v-card-text>
  </v-card>
</template>

<script>
import api from '@/api';

export default {
  name: 'ArticleDetail',
  data: () => ({
    post: {},
    postId: undefined,
  }),
  mounted() {
    // 设置文章ID
    this.postId = this.$route.params.id
    this.getPostById();
  },
  methods: {
    getPostById() {
      // 获取文章
      if (this.postId === undefined) {
        this.$dialog.notify.info('无法获取文章ID', {
          position: 'bottom-right',
          timeout: 3000,
        });
        return;
      }
      api.getPostById(this.postId).then(res => {
        this.post = res.data.data;
      });
    },
  },
};
</script>

<style scoped>

</style>
