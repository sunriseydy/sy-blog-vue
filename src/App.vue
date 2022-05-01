<template>
  <v-app id="inspire">
    <v-app-bar
        app
        flat
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

    <v-main>
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="2"
          >
            <v-sheet
                rounded="lg"
                min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
              cols="12"
              sm="8"
          >
            <v-sheet
                min-height="700vh"
                rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
              cols="12"
              sm="2"
          >
            <v-sheet
                rounded="lg"
                min-height="268"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
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
