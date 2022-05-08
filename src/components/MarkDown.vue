<template>
  <article ref="article" v-html="html" class="markdown-body line-numbers language-plain" />
</template>

<script>
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import mila from 'markdown-it-link-attributes';
import anchor from 'markdown-it-anchor';
import toc from 'markdown-it-toc-done-right';

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
      matcher(href) {
        return !href.startsWith('#');
      },
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    }).use(anchor, {
      permalink: anchor.permalink.ariaHidden({
        placement: 'before',
        symbol: '<svg class="octicon octicon-link" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>'
      }),
    }).use(toc, {
      callback: function(html, ast) {
        console.log(html);
        console.log(ast);
      }
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
.markdown-body, .markdown-body pre code {
  background-color: unset !important;
}

.octicon-link {
  visibility: hidden;
  fill: currentColor;
}

.markdown-body h1:hover .header-anchor .octicon-link, .markdown-body h2:hover .header-anchor .octicon-link, .markdown-body h3:hover .header-anchor .octicon-link, .markdown-body h4:hover .header-anchor .octicon-link, .markdown-body h5:hover .header-anchor .octicon-link, .markdown-body h6:hover .header-anchor .octicon-link {
  visibility: visible;
}
</style>
