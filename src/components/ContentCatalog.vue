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
      hoverable
    />
  </v-card>
</template>

<script>
export default {
  name: 'ContentCatalog',
  computed: {
    toc() {
      return this.$store.state.toc;
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
