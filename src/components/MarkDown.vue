<template>
  <span v-html="html" class="markdown-body line-numbers language-plain" />
</template>

<script>
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import mila from 'markdown-it-link-attributes';

export default {
  name: 'MarkDown',
  props: {
    content: String,
  },
  data: () => ({
    md: null,
  }),
  computed: {
    html: function() {
      let res = '';
      if (this.content) {
        res = this.md.render(this.content);
      }
      return res;
    },
  },
  created() {
    this.md = new MarkdownIt();
    this.md.use(mila, {
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    });
  },
  updated() {
    console.log('update');
    Prism.highlightAll();
  },
  mounted() {
    console.log('mounted');
    Prism.highlightAll();
  },
};
</script>

<style>
.markdown-body pre code {
  background-color: unset !important;
}
</style>
