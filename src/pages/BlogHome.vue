<template>
  <v-row>
    <v-col
        lg="9"
    >
      <article-archive />
    </v-col>

    <v-col
        lg="3"
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
