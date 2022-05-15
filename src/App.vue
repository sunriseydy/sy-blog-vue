<template>
  <v-app id="inspire">
    <app-bar />
    <app-content />
    <fab-to-top />
    <app-drawer v-if="!$vuetify.breakpoint.lgAndUp" />
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar';
import AppContent from '@/components/core/AppContent';
import FabToTop from '@/components/FabToTop';
import AppDrawer from '@/components/core/AppDrawer';
import config from '@/config';

export default {
  components: {AppDrawer, FabToTop, AppContent, AppBar},
  beforeCreate() {
    document.title = config.title;
  }
};

</script>
