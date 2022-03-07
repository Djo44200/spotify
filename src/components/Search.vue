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
        class="btn btn-primary"
        :class="{ disabled: isDisabled }"
        @click="clickValidate()"
      >
        Valider
      </button>
    </div>
    <div class="form-ctn">
        <!-- FIRST BUTTON RADIO -->
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          @click="clickRadioButton(enumRadioBtn.ALBUM)"
        />
        <label class="form-check-label" for="flexRadioDefault1">
           {{turpleRadioText[0]}}
        </label>
      </div>
        <!-- SECOND BUTTON RADIO -->      
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          @click="clickRadioButton(enumRadioBtn.ARTIST)"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          {{turpleRadioText[1]}}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
enum RADIO_BTN {
  ALBUM,
  ARTIST,
  NONE,
}


export default defineComponent({
  data() {
    return {
      enumRadioBtn: RADIO_BTN,
      search: "",
      radioBtnValue: RADIO_BTN.NONE,
      turpleRadioText : ['Recherche par Album','Recherche par Artiste']
    };
  },
  methods: {
    //Récupère la valeur du bouton radio
    clickRadioButton(isSelected: RADIO_BTN) {
      this.radioBtnValue =
        isSelected === RADIO_BTN.ALBUM ? RADIO_BTN.ALBUM : RADIO_BTN.ARTIST;
    },
    //Valide la saisie + Appel API
    clickValidate() {},
  },
  computed: {
    //Vérification des champs
    isDisabled(): boolean {
      return this.radioBtnValue === RADIO_BTN.NONE || this.search.length === 0;
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
.form-ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
