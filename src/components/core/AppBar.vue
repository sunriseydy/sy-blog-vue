<template>
  <v-app-bar
      app
      flat
      absolute
      :class="$vuetify.theme.themes.dark.main"
      id="app-bar"
  >
    <div class="container">
      <v-row>
        <v-col
            sm="2"
        >
          <v-list-item
              two-line
              @click="goTo('/')"
          >
            <v-list-item-content>
              <v-list-item-title>{{ siteInfo.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ siteInfo.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
import api from '@/api';

export default {
  name: 'AppBar',
  computed: {
    siteInfo() {
      return this.$store.state.siteInfo;
    },
  },
  created() {
    this.getSiteInfo();
  },
  methods: {
    getSiteInfo() {
      api.getSiteInfo().then(res => {
        this.$store.commit('updateSiteInfo', res.data.data);
      });
    },
    goTo(to = '/') {
      if (this.$route.path !== to) {
        this.$router.push(to);
      }
    }
  },

};
</script>

<style>
#app-bar {
  padding: 0 !important;
}
#app-bar .v-toolbar__content {
  padding: 0 !important;
}
</style>
