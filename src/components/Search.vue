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
  </div>
</template>

<script lang="ts">
import AuthService from "@/services/AuthService";
import SearchService from "@/services/SearchService";
import { getToken } from "@/services/spotifyAuth";

import { defineComponent } from "vue";


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
        const clientId = import.meta.env.SPOTIFY_API_ID;
    const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
    const token = await getToken(clientId, clientSecret);
    console.log('clientId',clientId);
    
    // const token = await getToken(clientId, clientSecret);
      // AuthService.connexion();
      // SearchService.getSearch(this.search)
    },
  },
  computed: {
    //Vérification des champs
    isDisabled(): boolean {
      return this.search.length === 0;
    },
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
.btn{
  color: white!important;
  background-color: #1ED760!important;
  border-radius: 500px!important;
}
</style>
