<template>
  <v-fab-transition>
    <v-btn
        v-show="fab"
        v-scroll="onScroll"
        bottom
        class="transition-swing"
        fab
        fixed
        large
        right
        style="z-index: 6"
        @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'FabToTop',
  data: () => ({fab: false}),
  methods: {
    onScroll() {
      this.fab = window.scrollY > 300;
    },
    toTop() {
      if (this.$route.hash) {
        this.$router.push({hash: ''});
      }
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style scoped>

</style>
