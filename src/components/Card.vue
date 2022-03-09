<template>
  <div class="card-ctn">
    <div class="tracks-items">
      <div v-for="(track, index) in tracksItems" :key="index">
        <!-- Mise en place d'une carte pour l'affichage -->
        <div class="card">
          <img :src="track.images[1].url" class="card-img-top" alt="image" />
          <!-- Bouton d'ajout -->
          <button type="button" class="btn btn-add" @click="addLibrary(track)">
            <span>+</span>
          </button>
          <div class="card-body">
            <p class="card-title">
              {{ track.name }}
            </p>
            <p class="card-resume">
              Durée : {{ convertMsToTime(track.duree) }} - Date de sortie :
              {{ convertDate(track.date) }}
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

export default defineComponent({
  props: ["tracksItems"],
  methods: {
    addLibrary(track: AlbumType) {
      this.$emit("onTrack", track);
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
.btn-add span {
  color: #000000;
  width: 48px;
  height: 48px;
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
  font-size: 0.875rem;
  line-height: 1rem;
  color: #6a6a6a;
}
</style>
