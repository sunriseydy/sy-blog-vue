<template>
  <v-app id="inspire">
    <app-bar />
    <app-content />
    <fab-to-top />
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar';
import AppContent from '@/components/core/AppContent';
import FabToTop from '@/components/FabToTop';

export default {
  components: {FabToTop, AppContent, AppBar},
};

</script>
