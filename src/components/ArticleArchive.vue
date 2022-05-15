<template>
  <v-row
      justify="center"
  >
    <v-col
        cols="12"
        v-show="loading"
    >
      <v-dialog
          v-model="loading"
          persistent
          width="300"
      >
        <v-card
            :color="$vuetify.theme.themes.dark.main"
            class="pa-1"
            height="50"
        >
          <v-card-text
              class="pa-1"
          >
            加载中
          </v-card-text>
          <v-progress-linear
              indeterminate
              rounded
          ></v-progress-linear>
        </v-card>
      </v-dialog>
    </v-col>
    <v-col
        cols="12"
        v-show="posts.length === 0"
    >
      <v-card
          outlined
          rounded="lg"
          elevation="12"
          :class="$vuetify.theme.themes.dark.main"
      >
        <v-banner
            shaped
        >
          没有文章
        </v-banner>
      </v-card>
    </v-col>
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
              elevation="12"
              :to="'/article/' + getPostLink(post)"
              :class="hover ? $vuetify.theme.themes.dark.hover : $vuetify.theme.themes.dark.main"
          >
            <v-card-text>
              <v-icon>mdi-folder-open</v-icon>
              <span
                  v-for="category in post.categoriesList"
                  :key="category.id"
                  v-text="' ' + category.name"
              />
              {{ ' | ' }}
              <v-icon>mdi-tag</v-icon>
              <span
                  v-for="tag in post.tagsList"
                  :key="tag.id"
                  v-text="' ' + tag.name"
              />
              {{ ' | ' }}
              <v-icon title="最后更新时间">mdi-calendar-edit</v-icon>
              {{ post.modified }}
              {{ ' | ' }}
              <v-icon title="发布于">mdi-calendar-check</v-icon>
              {{ post.date.slice(0, 10) }}
            </v-card-text>
            <v-divider />
            <v-card-title v-text="post.titleString" class="text-h5 text-lg-h3" />
            <v-img
                v-if="post.featuredMediaUrl"
                :src="post.featuredMediaUrl"
                max-height="400px"
                class="ma-4"
                contain
            >
            </v-img>
            <v-card-text>
              <mark-down :content="post.excerptString" />
            </v-card-text>
          </v-card>
        </template>
      </v-hover>

    </v-col>
    <v-col
        cols="auto"
        v-if="posts.length !== 0"
    >
      <v-btn
          fab
          :disabled="loading"
          @click="getNextPagePosts"
      >
        <v-icon>mdi-chevron-double-down</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import api from '@/api';
import MarkDown from '@/components/MarkDown';
import config from '@/config';

export default {
  name: 'ArticleArchive',
  components: {MarkDown},
  data: () => ({
    loading: false,
  }),
  computed: {
    posts: {
      get() {
        return this.$store.state.posts;
      },
      set(value) {
        this.$store.commit('updatePosts', value);
      },
    },
    archivePath: {
      get() {
        return this.$store.state.archivePath;
      },
      set(value) {
        this.$store.commit('updateArchivePath', value);
      },
    },
    page: {
      get() {
        return this.$store.state.page;
      },
      set(value) {
        this.$store.commit('updatePage', value);
      },
    },
    pageSize: {
      get() {
        return this.$store.state.pageSize;
      },
      set(value) {
        this.$store.commit('updatePageSize', value);
      },
    },
    totalPages: {
      get() {
        return this.$store.state.totalPages;
      },
      set(value) {
        this.$store.commit('updateTotalPages', value);
      },
    },
    categoryId() {
      return this.$store.getters.getCategoryId;
    },
    tagId() {
      return this.$store.getters.tagId;
    },
  },
  created() {
    console.log('archive created');
    this.getPosts();
  },
  watch: {
    categoryId: function() {
      this.getPosts();
    },
    tagId: function() {
      this.getPosts();
    },
  },
  methods: {
    getPosts(page = 0) {
      // 处理文章缓存
      if (page === 0 && this.archivePath === this.$route.path && this.posts.length !== 0) {
        return;
      }
      if (page === 0) {
        this.posts = [];
      }
      let apiFun;
      this.loading = true;
      let _posts = this.posts;
      // 获取文章
      if (page === this.totalPages) {
        this.$dialog.notify.info('已经最后一页了', {
          position: 'bottom-right',
          timeout: 3000,
        });
        this.loading = false;
        return;
      }

      switch (this.$route.name) {
        case 'home':
          apiFun = api.getPosts({
            page,
            pageSize: this.pageSize,
          });
          break;
        case 'categorySlug':
          if (this.categoryId === 0) {
            return;
          }
          apiFun = api.getPostsByCategory({
            page,
            pageSize: this.pageSize,
            categoryId: this.categoryId,
          });
          break;
        case 'tagSlug':
          if (this.tagId === 0) {
            return;
          }
          apiFun = api.getPostsByTag({
            page,
            pageSize: this.pageSize,
            tagId: this.tagId,
          });
          break;
        default:
          this.$dialog.notify.warning('不支持的文章归档类型', {
            position: 'bottom-right',
            timeout: 3000,
          });
          this.loading = false;
          return;
      }

      apiFun.then(res => {
        const {page, pageSize, totalPages, content} = res.data.data;
        this.page = page;
        this.pageSize = pageSize;
        this.totalPages = totalPages;
        for (let post of content) {
          _posts.push(post);
        }
        this.posts = _posts;
      }).finally(() => {
        this.loading = false;
        this.archivePath = this.$route.path;
      });
    },
    getNextPagePosts() {
      this.getPosts(this.page + 1);
    },
    getPostLink(post) {
      let postLink = config.postLink;
      switch (postLink) {
        case 'slug':
          return post.slug;
        case 'id':
          return post.id;
        default:
          this.$dialog.notify.warning('不支持的文章链接类型', {
            position: 'bottom-right',
            timeout: 3000,
          });
          return;
      }
    },
  },
};
</script>

<style scoped>

</style>
