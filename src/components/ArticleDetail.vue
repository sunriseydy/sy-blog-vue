<template>
  <v-row>
    <v-col
        cols="12"
        id="title-col"
    >
      <v-card
          outlined
          rounded="lg"
          class="grey darken-4"
          elevation="12"
      >
        <v-card-title
            v-text="post.titleString"
            class="text-h3"
        />
      </v-card>
    </v-col>
    <v-col
        cols="12"
    >
      <v-card
          outlined
          rounded="lg"
          class="grey darken-4"
          elevation="12"
      >
        <v-img
            v-if="post.featuredMediaUrl"
            :src="post.featuredMediaUrl"
        >
        </v-img>
      </v-card>
    </v-col>
    <v-col
        cols="12"
    >
      <v-card
          outlined
          rounded="lg"
          class="grey darken-4"
          elevation="12"
      >
        <v-card-text>
          <mark-down :content="post.contentString" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import api from '@/api';
import MarkDown from '@/components/MarkDown';

export default {
  name: 'ArticleDetail',
  components: {MarkDown},
  data: () => ({
    post: {},
    postId: undefined,
  }),
  mounted() {
    // 设置文章ID
    this.postId = this.$route.params.id;
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
#title-col {
  position: sticky;
  top: -12px;
  z-index: 1;
}
</style>
