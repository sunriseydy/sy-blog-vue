<template>
  <v-expansion-panels
      hover
      v-model="openIndex"
  >
    <v-expansion-panel
        :class="$vuetify.theme.themes.dark.main"
    >
      <v-expansion-panel-header>标签</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-chip-group
            column
        >
          <v-chip
            v-for="tag of tags"
            :key="tag.id"
            link
            :to="{ name: 'tagSlug', params: { slug: tag.slug }}"
          >
            {{tag.name}}
          </v-chip>
        </v-chip-group>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import api from '@/api';

export default {
  name: 'PostTag',
  data() {
    return {
      openIndex: 0,
    };
  },
  computed: {
    tags() {
      return this.$store.state.tags;
    },
  },
  created() {
    if (this.tags.length === 0) {
      this.getTags();
    }
  },
  methods: {
    getTags() {
      api.getTags().then(res => {
        this.$store.commit('updateTags', res.data.data);
      })
    }
  }
};
</script>

<style scoped>

</style>
