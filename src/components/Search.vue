<template>
  <div class="search-ctn">
    <div class="search-input">
      <div class="input-group">
        <!-- INPUT SEARCH -->
        <input
          type="text"
          class="form-control"
          placeholder="Recherche"
          aria-label="Recherche"
          aria-describedby="basic-addon1"
          v-model="search"
        />
      </div>
      <!-- VALIDATE BUTTON -->
      <button
        type="button"
        class="btn"
        :class="{ disabled: isDisabled }"
        @click="clickValidate()"
      >
        Valider
      </button>
    </div>
    <div class="tracks-items">
      <div v-for="(track, index) in tracksItems" :key="index">
        <div class="card">
          <img :src="track.images[1].url" class="card-img-top" alt="image" />
          <div class="card-body">
            <p class="card-title">
              {{ track.name }}
            </p>
            <p class="card-resume">
              Durée : {{ track.duree }} - Date de sortie : {{ track.date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SearchService from "@/services/SearchService";
import { getToken } from "@/services/spotifyAuth";

import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      search: "",
      turpleRadioText: ["Recherche par Album", "Recherche par Artiste"],
    };
  },
  methods: {
    //Valide la saisie + Appel API
    async clickValidate() {
      this.$store.dispatch("search/loadSearch", this.search);
    },
  },
  computed: {
    //Vérification des champs
    isDisabled(): boolean {
      return this.search.length === 0;
    },
    ...mapGetters({
      tracksItems: "search/getAlbums",
    }),
  },
});
</script>

<style lang="css">
.search-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.search-input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
.input-group {
  margin-right: 2rem;
}
.btn {
  color: white !important;
  background-color: #1ed760 !important;
  border-radius: 500px !important;
}
.tracks-items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
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
