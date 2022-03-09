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
      <div v-for="(track, index) in tracksItems" :key="index">coucou</div>
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
</style>
