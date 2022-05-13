<template>
  <v-row>
    <v-col
        cols="12"
        md="6"
        lg="12"
    >
      <category-tree />
    </v-col>
    <v-col
        cols="12"
        md="6"
        lg="12"
    >
      <post-tag />
    </v-col>
  </v-row>
</template>

<script>
import CategoryTree from '@/components/CategoryTree';
import PostTag from '@/components/PostTag';

export default {
  name: 'SideBar',
  components: {PostTag, CategoryTree},
};
</script>

<style scoped>

</style>
