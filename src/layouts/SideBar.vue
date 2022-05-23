<template>
  <v-row>
    <v-col
        v-if="!$vuetify.breakpoint.lgAndUp"
        cols="12"
    >
      <v-sheet
          rounded
          outlined
      >
        <default-menu />
      </v-sheet>
    </v-col>
    <v-col
        cols="12"
    >
      <v-sheet
          rounded
          outlined
      >
        <default-search class="ma-2" />
      </v-sheet>
    </v-col>
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
import DefaultSearch from '@/components/Search';
import DefaultMenu from '@/components/Menu';

export default {
  name: 'SideBar',
  components: {DefaultMenu, DefaultSearch, PostTag, CategoryTree},
};
</script>

<style scoped>

</style>
