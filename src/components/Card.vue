<template>
  <div class="card-ctn">
    <div class="tracks-items">
      <div v-for="(track, index) in tracksItems" :key="index">
        <!-- Mise en place d'une carte pour l'affichage -->
        <div class="card">
          <a :href="track.url" target="_blank"
            ><img :src="track.images[1].url" class="card-img-top" alt="image"
          /></a>
          <!-- Bouton d'ajout -->
          <button
            v-if="buttonAdd"
            type="button"
            class="btn btn-add"
            :class="{ 'none-btn': addAlbum(track) }"
            @click="addLibrary(track)"
          >
            <img :src="checkLogo" alt="Bootstrap" width="32" height="32" />
          </button>
          <div class="card-body">
            <p class="card-title">
              {{ track.name }}
            </p>
            <p class="card-resume">
              <span>Durée : {{ convertMsToTime(track.duree) }}</span>
              <span>Date de sortie :{{ convertDate(track.date) }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { AlbumType } from "@/models/AlbumType";
import dayjs from "dayjs";
import { defineComponent } from "vue";
import checkLogo from "@/assets/check.svg";

export default defineComponent({
  props: ["tracksItems", "buttonAdd"],
  data() {
    return {
      checkLogo,
      allAlbumCheck: [] as AlbumType[],
    };
  },
  methods: {
    // Ajout à la bibliothèque
    addLibrary(track: AlbumType) {
      this.allAlbumCheck.push(track);
      this.$emit("onTrack", track);
    },
    addAlbum(track: AlbumType) {
      //Check si l'ablbum à déjà été sauvegardé - Si oui, suppression du check
      const found = this.allAlbumCheck.find(
        (album) => album.name === track.name && album.url === track.url
      );
      return found ? true : false;
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

    convertDate(date: string) {
      //Convertion de date en format JJ/MM/AAAA
      const dateConvert = new Date(date);
      return dayjs(dateConvert).format("DD/MM/YYYY");
    },
  },
});
</script>

<style lang="css">
.card-ctn {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}
.btn-add {
  position: absolute;
  bottom: 10px;
  right: 25px;
  top: 170px;
  background: #1ed760;
  border-radius: 500px;
  font-size: inherit;
  width: 48px;
  height: 48px;
}
.btn-add:hover {
  background: #1fdf64 !important;
  width: 50px;
  height: 50px;
}
.btn-add img {
  color: #000000;
  width: 15px;
  height: 15px;
}
.none-btn {
  display: none !important;
}
.tracks-items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-around;
}
.card {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background: #181818 !important;
  padding: 16px;
  width: 15rem;
}
.card:focus:hover {
  background: #282828 !important;
}
.card:hover {
  background: #282828 !important;
}
.card-title {
  display: flex;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
}
.card-resume {
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #6a6a6a;
}
</style>
