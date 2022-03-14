<template>
  <div class="library-ctn">
    <navigator
      class="nav"
      @onChoiceSelected="choiceSelected"
      :choiceRouter="changeRouter"
    />
    <div class="container-ctn">
      <app-header :title="'Librairie'" />
      <div class="cards">
        <card
          v-for="(track, index) in libraryLists"
          :key="index"
          :url="track.url"
          :urlImg="track.images[1].url"
          :buttonAdd="false"
          :buttonRemove="false"
          :title="track.name"
          :resumeOne="resumeOne(track.duree)"
          :resumeTwo="resumeTwo(track.date)"
          :object="track"
          :noneBtn="true"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Navigator from "@/components/Navigator.vue";
import { AppHeader, Card } from "@/components";
import { CHOICENAV } from "@/models/RouterType";
import dayjs from "dayjs";

export default defineComponent({
  components: { Navigator, AppHeader, Card },

  data() {
    return {};
  },
  async created() {},
  methods: {
    choiceSelected(choice: CHOICENAV) {
      choice === CHOICENAV.LIBRARY
        ? this.$router.push({ name: "Library" })
        : this.$router.push({ name: "Search" });
      this.$store.dispatch("changeRouterView", choice);
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
      libraryLists: "library/getLibraryAlbums",
      changeRouter: "getRouterView",
    }),
  },
});
</script>

<style>
.library-ctn {
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
