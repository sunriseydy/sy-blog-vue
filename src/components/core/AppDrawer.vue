<template>
  <v-navigation-drawer
      app
      temporary
      right
      clipped
      bottom
      v-model="showDrawer"
  >

    <v-row>
      <v-col>
        <side-bar class="ma-1" />
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import SideBar from '@/layouts/SideBar';

export default {
  name: 'AppDrawer',
  components: {SideBar},
  computed: {
    showDrawer: {
      get() {
        return this.$store.state.showDrawer;
      },
      set(value) {
        this.$store.commit('toggleDrawer', value);
      },
    },
  },
};
</script>

<style scoped>

</style>
