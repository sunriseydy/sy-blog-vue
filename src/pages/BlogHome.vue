<template>
  <v-row>
    <v-col
        cols="auto"
        sm="8"
        offset-sm="2"
    >
      <article-archive />
    </v-col>

    <v-col
        cols="auto"
        sm="2"
    >
      <side-bar />
    </v-col>
  </v-row>
</template>

<script>
import ArticleArchive from "@/components/ArticleArchive";
import SideBar from "@/components/SideBar";
export default {
  name: 'BlogHome',
  components: {SideBar, ArticleArchive}
}
</script>

<style scoped>

</style>
