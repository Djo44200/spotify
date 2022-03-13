<template>
  <div class="search-ctn">
    <navigator class="nav" @onChoiceSelected="choiceSelected" :choiceRouter="changeRouter" />
    <div class="container-ctn" >
      <app-header :title="'Recherche'" />
      <search @onSearch="search" />
      <card
        :buttonAdd="true"
        :tracksItems="tracksItems"
        @onTrack="addToLibrairy"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Navigator from "@/components/Navigator.vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import { Search, AppHeader, Card } from "@/components";
import { getToken } from "@/services/spotifyAuth";
import type { AlbumType } from "@/models/AlbumType";
import { CHOICENAV } from "@/models/RouterType";

export default defineComponent({
  components: { Navigator,AppHeader,Search,Card },

  data() {
    return {  };
  },
  async created() {},
  methods: {
    choiceSelected(choice: CHOICENAV) {
        choice === CHOICENAV.LIBRARY ? this.$router.push('Library'):this.$router.push('Search');
        this.$store.dispatch("changeRouterView", choice);

    },
    //Envoie de la saisie à l'API
    async search(search: string) {
      if (this.$route.query.code && !localStorage.getItem("access_token")) {
        let url = this.$route.query.code.toString();
        localStorage.setItem("code", url);
      }
      await getToken();
      this.$store.dispatch("search/loadSearch", search);
    },
    addToLibrairy(track: AlbumType) {
      this.$store.dispatch("library/saveAlbum", track);
    },
  },
  computed: {
    ...mapGetters({
      tracksItems: "search/getAlbums",
      changeRouter: "getRouterView",
    }),
  },
});
</script>

<style>
.search-ctn{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.nav {
  display: flex;
    align-items: flex-start;
    align-content: center;
  height: 100%;
  width: 10%;
  align-self:flex-start;
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
