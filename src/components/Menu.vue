<template>
  <v-row>
    <v-col
        cols="6"
        lg="1"
        md="3"
        v-for="menu in menus"
        :key="menu.name"
    >
      <v-list-item
          two-line
          @click="goTo(menu.path)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ menu.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
import config from '@/config';

export default {
  name: 'DefaultMenu',
  data() {
    return {
      menus: config.menus,
    };
  },
  methods: {
    goTo(to = '/') {
      if (this.$route.path !== to) {
        this.$router.push(to);
      }
    },
  },
};
</script>

<style scoped>

</style>
