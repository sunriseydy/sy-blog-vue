<template>
  <v-row
      align-content="center"
  >
    <v-col
        v-for="post in posts"
        :key="post.id"
        cols="12"
    >
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
              outlined
              rounded="lg"
              class="grey"
              elevation="12"
              :to="{ name: 'articleId', params: { id: post.id }}"
              :class="`darken-${hover ? 3 : 4}`"
          >
            <v-card-title v-text="post.titleString" />
            <v-img
                v-if="post.featuredMediaUrl"
                :src="post.featuredMediaUrl"
                height="400px"
                class="ma-4"
            >
            </v-img>
            <v-card-text>
              {{ post.excerptString }}
            </v-card-text>
          </v-card>
        </template>
      </v-hover>

    </v-col>
    <v-col
        offset="5"
        v-if="posts.length !== 0"
    >
      <v-btn
          small
          fab
          :disabled="nextPageBtnDisable"
          @click="getNextPagePosts"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-col>
  </v-row>
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
    nextPageBtnDisable: false,
  }),
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts(page = 0) {
      this.nextPageBtnDisable = true;
      // 获取文章
      if (page === this.totalPages) {
        this.$dialog.notify.info('已经最后一页了', {
          position: 'bottom-right',
          timeout: 3000,
        });
        this.nextPageBtnDisable = false;
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
        for (let post of content) {
          this.posts.push(post);
        }
      }).finally(() => {
        this.nextPageBtnDisable = false;
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
