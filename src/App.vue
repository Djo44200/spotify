<template>
  <main class="main">
    <navigator class="nav" @onChoiceSelected="choiceSelected" />
    <div class="container-ctn" v-if="enumChoiceNav.SEARCH === choice">
      <app-header :title="'DEV'" />
      <search @onSearch="search" />
      <card
        :buttonAdd="true"
        :tracksItems="tracksItems"
        @onTrack="addToLibrairy"
      />
    </div>
    <div class="container-ctn" v-else>
      <library :lists="libraryLists" />
    </div>
  </main>
</template>
<script lang="ts">
import { Search, AppHeader, Card, Library } from "@/components";
import Navigator, { CHOICENAV } from "@/components/Navigator.vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import type { AlbumType } from "./models/AlbumType";

export default defineComponent({
  components: { Card, Search, AppHeader, Navigator, Library },
  data() {
    return { choice: CHOICENAV.SEARCH, enumChoiceNav: CHOICENAV };
  },
  methods: {
    //Envoie de la saisie à l'API
    search(search: string) {
      this.$store.dispatch("search/loadSearch", search);
    },
    addToLibrairy(track: AlbumType) {
      this.$store.dispatch("library/saveAlbum", track);
    },
    choiceSelected(choice: CHOICENAV) {
      this.choice = choice;
    },
  },
  computed: {
    ...mapGetters({
      tracksItems: "search/getAlbums",
      libraryLists: "library/getLibraryAlbums",
    }),
  },
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
  display: flex;
  width: 100%;
  min-height: 100%;
}
.nav {
  display: flex;
  align-items: flex-start;
  align-content: center;
  height: 100%;
  width: 10%;
}
.container-ctn {
  display: flex;
  flex-direction: column;
  width: 90%;
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
