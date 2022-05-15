<template>
  <v-expansion-panels
      hover
      v-model="openIndex"
  >
    <v-expansion-panel
        :class="$vuetify.theme.themes.dark.main"
    >
      <v-expansion-panel-header>分类</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-treeview
            v-if="categoryTree.length !== 0"
            :items="categoryTree"
            item-children="children"
            item-key="fullSlug"
            item-text="name"
            dense
            open-all
            activatable
            hoverable
            return-object
            v-on:update:active="activeUpdated"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import api from '@/api';

export default {
  name: 'CategoryTree',
  data() {
    return {
      openIndex: 0,
    };
  },
  computed: {
    categoryTree() {
      return this.$store.state.categoryTree;
    },
  },
  methods: {
    getCategoryTree() {
      api.getCategoryTree().then((res) => {
        this.$store.commit('updateCategoryTree', res.data.data);
        console.log('获取了分类树');
      });
    },

    activeUpdated(arr) {
      if (arr.length === 0) {
        return;
      }
      if (arr.length !== 0) {
        let clicked = arr[0];
        let path = `/category/${clicked.fullSlug}`;
        if (this.$route.path !== path) {
          this.$router.push({
            path,
          });
        }
      }
    },
  },
  created() {
    if (this.categoryTree.length === 0) {
      this.getCategoryTree();
    }
  },
};
</script>

<style scoped>

</style>
