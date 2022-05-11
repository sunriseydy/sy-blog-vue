<template>
  <v-card
      outlined
      rounded="lg"
      class="grey darken-4 toc-card"
      elevation="12"
      v-if="toc.length !== 0"
      v-scroll="onScroll"
  >
    <v-treeview
        :items="toc"
        item-children="c"
        item-key="n"
        item-text="n"
        dense
        open-all
        activatable
        hoverable
        v-on:update:active="activeUpdated"
        :active="active"
    />
  </v-card>
</template>

<script>
export default {
  name: 'ContentCatalog',
  data() {
    return {
      active: [],
      latestClicked: null,
      contentOffsetTop: 0,
      titleOffsetTop: 0,
      appBarHeight: 0,
      tocOffsetTop: [],
    };
  },
  computed: {
    toc() {
      return this.$store.state.toc;
    },
  },
  mounted() {
    console.log('catalog mounted');
  },
  updated() {
    console.log('catalog updated');
  },
  methods: {
    activeUpdated(arr) {
      console.log('active change:', arr, this.latestClicked, this.active);
      if (arr.length === 0) {
        return;
      }
      if (arr.length !== 0 && this.active.length !== 0 && arr[0] === this.active[0]) {
        // 忽略页面滚动引起的变化
        return;
      }
      if (arr.length !== 0) {
        this.latestClicked = arr[0];
      }
      if (this.latestClicked) {
        console.log('goto:', this.latestClicked);
        this.computeOffset();

        let toc = this.tocOffsetTop.find(t => t.key === this.latestClicked);
        let top = toc.offsetTop;

        console.log('goto top:', top);
        this.$vuetify.goTo(top + this.appBarHeight);
      }
    },

    onScroll: function() {
      this.computeOffset();

      let windowTop = window.scrollY;
      console.log('windowTop:', windowTop);
      let currentToc = null;
      this.tocOffsetTop.forEach(toc => {
        console.log(toc.key, toc.offsetTop);
        if (toc.offsetTop && toc.offsetTop <= windowTop) {
          currentToc = toc.key;
        }
      });
      if (currentToc) {
        this.active = [currentToc];
      } else {
        this.active = [];
      }
    },

    computeContentOffsetTop() {
      let content = document.getElementById('article-content');
      let contentOffsetTop = 0;
      if (!content) {
        return;
      }
      while (content.offsetParent.offsetTop !== 0) {
        contentOffsetTop += content.offsetTop;
        content = content.offsetParent;
      }
      contentOffsetTop += content.offsetTop;
      this.contentOffsetTop = contentOffsetTop;
    },

    computeTocOffsetTop() {
      let tocArray = this.$store.getters.tocArray;
      let tocOffsetTop = [];
      tocArray.forEach(toc => {
        let tocEle = document.getElementById(encodeURI(toc));
        let tocTop = tocEle.offsetTop + this.contentOffsetTop - this.titleOffsetTop;
        tocOffsetTop.push({
          key: toc,
          offsetTop: tocTop,
        });
      });
      this.tocOffsetTop = tocOffsetTop;
    },

    computeTitleOffsetTop() {
      let title = document.getElementById('title-col');
      if (title) {
        this.titleOffsetTop = title.offsetHeight
      }
    },

    computeAppBarHeight() {
      let appBar = document.getElementById('app-bar');
      if (appBar) {
        this.appBarHeight = appBar.offsetHeight;
      }
    },

    computeOffset() {
      // 先算出 article-content 距离window的offsetTop
      this.computeAppBarHeight();
      this.computeContentOffsetTop();
      this.computeTitleOffsetTop();
      this.computeTocOffsetTop();
    },
  },
};
</script>

<style scoped>
.toc-card {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
