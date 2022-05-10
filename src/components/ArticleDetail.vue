<template>
  <v-row>
    <v-col
        cols="12"
        id="title-col"
        ref="title-col"
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
        <v-card-text id="article-content" ref="article-content" v-if="post.contentString">
          <mark-down :content="post.contentString" is-detail />
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
  created() {
    console.log('detail created');
    // 设置文章ID
    this.postId = this.$route.params.id;
    this.getPostById();
  },
  mounted() {
    console.log('detail mounted');
  },
  updated() {
    console.log('detail updated');
    this.$nextTick(() => {
      // 获取标题高度
      let offsetHeight = this.$refs['title-col'].offsetHeight;
      console.log(offsetHeight);
      this.$store.commit('updateTitleColHeight', offsetHeight);
    })
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
        console.log('获取了文章');
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
