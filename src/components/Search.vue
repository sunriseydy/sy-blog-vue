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
      if (this.$route.name === 'search' && this.$route.query.search === this.searchString) {
        return;
      }
      this.$router.push({
        name: 'search',
        query: {
          search: this.searchString,
        },
      });
    },
  },
};
</script>

<style scoped>

</style>
