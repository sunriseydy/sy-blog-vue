<template>
  <v-row>
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
        id="title-col"
        ref="title-col"
    >
      <v-card
          outlined
          rounded="lg"
          :class="$vuetify.theme.themes.dark.main"
          elevation="12"
      >
        <v-card-text class="text-caption pa-1">
          <v-row no-gutters>
            <v-col>
              <span v-if="!$vuetify.breakpoint.lgAndUp">
                <v-dialog
                    attach="#title-catalog"
                    hide-overlay
                    eager
                    scrollable
                    content-class="title-catalog-content"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        v-bind="attrs"
                        v-on="on"
                        icon
                        @click="$refs['content-catalog'].computeTitleOffsetTop()"
                    >
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </template>
                  <content-catalog ref="content-catalog" />
                </v-dialog>
                <span>{{ ' | ' }}</span>
              </span>
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
              {{ post.date ? post.date.slice(0, 10) : '' }}
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider />
        <v-card-title
            v-text="post.titleString"
            class="text-h5 text-lg-h3"
        />
      </v-card>
    </v-col>
    <v-col
        cols="12"
        id="title-catalog"
        :style="{
                  top: titleOffsetTop - 24 + 'px',
                  maxHeight: $vuetify.breakpoint.height * 0.5 + 'px',
                  maxWidth: $vuetify.breakpoint.width * 0.9 + 'px',
                }"
    />
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
import ContentCatalog from '@/components/ContentCatalog';

export default {
  name: 'ArticleDetail',
  components: {ContentCatalog, MarkDown},
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
    loading: false,
    post: {},
    postId: undefined,
    postSlug: undefined,
    pageSlug: undefined,
  }),
  computed: {
    titleOffsetTop() {
      return this.$store.state.titleOffsetTop;
    },
  },
  created() {
    console.log('detail created');
    // 设置文章ID
    this.postId = this.$route.params.id;
    this.pageSlug = this.$route.params.slug;
    this.postSlug = this.$route.params.slug;
    this.getPost();
  },
  mounted() {
    console.log('detail mounted');
  },
  updated() {
    console.log('detail updated');
  },
  methods: {
    getPost() {
      this.loading = true;
      let apiFun;
      if (this.isPost) {
        if (this.postId !== undefined) {
          apiFun = api.getPostById(this.postId);
        } else if (this.postSlug !== undefined) {
          apiFun = api.getPostBySlug(this.postSlug.replaceAll(/.*\//g, ''));
        } else {
          this.$dialog.notify.warning('文章标识不存在', {
            position: 'bottom-right',
            timeout: 3000,
          });
          this.loading = false;
          return;
        }
      } else if (this.isPage) {
        if (this.pageSlug === undefined) {
          this.$dialog.notify.warning('页面slug不存在', {
            position: 'bottom-right',
            timeout: 3000,
          });
          this.loading = false;
          return;
        }
        apiFun = api.getPageBySlug(this.pageSlug);
      } else {
        this.$dialog.notify.warning('内容类型不匹配，不是 post 也不是 page', {
          position: 'bottom-right',
          timeout: 3000,
        });
        this.loading = false;
        return;
      }
      apiFun.then(res => {
        this.post = res.data.data;
        console.log('获取了内容');
      }).finally(() => this.loading = false);
    },
  },
};
</script>

<style>
#title-col {
  position: sticky;
  top: -12px;
  z-index: 1;
}

#title-catalog {
  position: fixed;
  padding: 0 0 0 12px;
  z-index: 100;
  right: auto;
  bottom: auto;
  left: auto;
  width: auto;
  height: auto;
}

#title-catalog .v-dialog__content {
  align-items: unset;
  justify-content: unset;
  position: unset;
  max-height: inherit;
  max-width: inherit;
}

#title-catalog .title-catalog-content {
  margin: 0;
}
</style>
