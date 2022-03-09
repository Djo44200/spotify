<template>
  <main class="main">
    <app-header :title="'DEV'" />
    <search @onSearch="search" />
    <card :tracksItems="tracksItems" @onTrack="addToLibrairy" />
  </main>
</template>
<script lang="ts">
import Search from "@/components/Search.vue";
import AppHeader from "@/components/AppHeader.vue";
import { defineComponent } from "vue";
import Card from "./components/Card.vue";
import { mapGetters } from "vuex";
import type { AlbumType } from "./models/AlbumType";

export default defineComponent({
  methods: {
    //Envoie de la saisie à l'API
    search(search: string) {
      this.$store.dispatch("search/loadSearch", search);
    },
    addToLibrairy(track: AlbumType) {
      this.$store.dispatch("library/saveAlbum", track);
    },
  },
  computed: {
    ...mapGetters({
      tracksItems: "search/getAlbums",
    }),
  },
  components: { Card, Search, AppHeader },
});
</script>
<style>
@import "./assets/base.css";
#app {
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: #181818;
  color: white;
}
.main {
  height: 100%;
}

.title {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-bottom: 2rem;
}
</style>
