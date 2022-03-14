<template>
  <div class="search-ctn">
    <navigator
      class="nav"
      @onChoiceSelected="choiceSelected"
      :choiceRouter="changeRouter"
    />
    <div class="container-ctn">
      <app-header :title="'Recherche'" />
      <search @onSearch="search" />
      <div class="cards">
        <card
          v-for="(track, index) in tracksItems"
          :key="index"
          :url="track.url"
          :urlImg="track.images[1].url"
          :buttonAdd="addBtn(track)"
          :buttonRemove="!addBtn(track)"
          :title="track.name"
          :resumeOne="resumeOne(track.duree)"
          :resumeTwo="resumeTwo(track.date)"
          :object="track"
          @onAdd="addToLibrairy"
          @onRemove="removeToLibrairy"
        />
      </div>
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
import dayjs from "dayjs";

export default defineComponent({
  components: { Navigator, AppHeader, Search, Card },

  data() {
    return {};
  },
  async created() {},
  methods: {
    choiceSelected(choice: CHOICENAV) {
      choice === CHOICENAV.LIBRARY
        ? this.$router.push("Library")
        : this.$router.push("Search");
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
    removeToLibrairy(track:AlbumType){
      this.$store.dispatch("library/removeAlbum", track);
    },
    addBtn(track: AlbumType): boolean {
      //Check si l'ablbum à déjà été sauvegardé - Si oui, suppression du check
      const found = this.libraryAlbum.find(
        (album: AlbumType) =>
          album.name === track.name && album.url === track.url
      );
      return found ? false : true;
    },
    resumeOne(duree: number): string {
      return "Durée : " + this.convertMsToTime(duree);
    },
    resumeTwo(date: string): string {
      return "Date de sortie : " + this.convertDate(date);
    },
    convertDate(date: string) {
      //Convertion de date en format JJ/MM/AAAA
      const dateConvert = new Date(date);
      return dayjs(dateConvert).format("DD/MM/YYYY");
    },

    //https://bobbyhadz.com/blog/javascript-convert-milliseconds-to-hours-minutes-seconds
    convertMsToTime(milliseconds: number) {
      let seconds = Math.floor(milliseconds / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);

      seconds = seconds % 60;
      minutes = minutes % 60;

      // 👇️ If you don't want to roll hours over, e.g. 24 to 00
      // 👇️ comment (or remove) the line below
      // commenting next line gets you `24:00:00` instead of `00:00:00`
      // or `36:15:31` instead of `12:15:31`, etc.
      hours = hours % 24;

      return `${this.padTo2Digits(hours)}:${this.padTo2Digits(
        minutes
      )}:${this.padTo2Digits(seconds)}`;
    },

    padTo2Digits(num: number) {
      return num.toString().padStart(2, "0");
    },
  },
  computed: {
    ...mapGetters({
      tracksItems: "search/getAlbums",
      changeRouter: "getRouterView",
      libraryAlbum: "library/getLibraryAlbums",
    }),
  },
});
</script>

<style>
.search-ctn {
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
  align-self: flex-start;
}

.container-ctn {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.cards {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
