<template>
  <v-card
      outlined
      rounded="lg"
      class="grey darken-4 toc-card"
      elevation="12"
      v-if="toc.length !== 0"
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
    };
  },
  computed: {
    toc() {
      return this.$store.state.toc;
    },
    titleColHeight() {
      return this.$store.state.titleColHeight;
    },
  },
  methods: {
    activeUpdated(arr) {
      if (arr.length !== 0) {
        this.latestClicked = arr[0];
      }
      if (this.latestClicked) {
        this.$vuetify.goTo(`[id='${encodeURI(this.latestClicked)}']`, {
          offset: this.titleColHeight,
        });
      }
    },
    updateActiveToc(arr) {
      this.active = arr;
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
