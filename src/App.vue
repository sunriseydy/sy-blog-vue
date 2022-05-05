<template>
  <v-app id="inspire">
    <app-bar />
    <app-content />
  </v-app>
</template>

<script>
import AppBar from '@/components/core/AppBar';
import AppContent from '@/components/core/AppContent';

export default {
  components: {AppContent, AppBar},
};

</script>
