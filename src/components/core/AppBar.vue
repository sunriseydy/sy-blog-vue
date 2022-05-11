<template>
  <v-app-bar
      app
      flat
      absolute
      id="app-bar"
  >
    <v-tabs
        centered
        class="ml-n9"
    >
      <v-tab
          v-for="link in links"
          :key="link"
      >
        {{ link }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>

<style scoped>

</style>
