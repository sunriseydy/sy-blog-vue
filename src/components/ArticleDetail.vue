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
          :class="$vuetify.theme.themes.dark.main"
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
        v-if="post.featuredMediaUrl"
    >
      <v-card
          outlined
          rounded="lg"
          class="grey darken-4"
          elevation="12"
      >
        <v-img
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
  props: {
    isPost: {
      type: Boolean,
      default: false,
    },
    isPage: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    post: {},
    postId: undefined,
    pageSlug: undefined,
  }),
  created() {
    console.log('detail created');
    // 设置文章ID
    this.postId = this.$route.params.id;
    this.pageSlug = this.$route.params.slug;
    this.getPostById();
  },
  mounted() {
    console.log('detail mounted');
  },
  updated() {
    console.log('detail updated');
  },
  methods: {
    getPostById() {
      let apiFun;
      if (this.isPost) {
        if (this.postId === undefined) {
          this.$dialog.notify.warning('文章ID不存在', {
            position: 'bottom-right',
            timeout: 3000,
          });
          return;
        }
        apiFun = api.getPostById(this.postId);
      } else if (this.isPage) {
        if (this.pageSlug === undefined) {
          this.$dialog.notify.warning('页面slug不存在', {
            position: 'bottom-right',
            timeout: 3000,
          });
          return;
        }
        apiFun = api.getPageBySlug(this.pageSlug);
      } else {
        this.$dialog.notify.warning('内容类型不匹配，不是 post 也不是 page', {
          position: 'bottom-right',
          timeout: 3000,
        });
        return;
      }
      apiFun.then(res => {
        this.post = res.data.data;
        console.log('获取了内容');
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
