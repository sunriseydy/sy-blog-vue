<template>
  <v-row>
    <v-col
        cols="12"
    >
      <category-tree />
    </v-col>
  </v-row>
</template>

<script>
import CategoryTree from '@/components/CategoryTree';

export default {
  name: 'SideBar',
  components: {CategoryTree},
};
</script>

<style scoped>

</style>
