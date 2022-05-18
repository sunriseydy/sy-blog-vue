<template>
  <v-text-field
      v-model="searchString"
      filled
      dense
      clearable
      outlined
      hide-details="auto"
      label="搜索"
      type="text"
      clear-icon="mdi-close-circle"
      append-outer-icon="mdi-magnify"
      @click:append-outer="onSearch"
  />
</template>

<script>
export default {
  name: 'DefaultSearch',
  data() {
    return {
      searchString: '',
    };
  },
  methods: {
    onSearch() {
      if (this.searchString === '') {
        return;
      }
      if (this.$store.state.searchString === this.searchString) {
        return;
      }
      this.$store.commit('updateSearchString', this.searchString);
    },
  },
};
</script>

<style scoped>

</style>
