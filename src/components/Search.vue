<template>
  <div class="search-ctn">
    <div class="search-input">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Recherche"
          aria-label="Recherche"
          aria-describedby="basic-addon1"
        />
      </div>
      <button type="button" class="btn btn-primary" :class="{'disabled': isDisabled}">Valider</button>
    </div>
    <div class="form-ctn">
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        @click="clickRadioButton('ALBUM')"
      />
      <label class="form-check-label" for="flexRadioDefault1">
        Recherche par Album
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        @click="clickRadioButton('ARTIST')"
      />
      <label class="form-check-label" for="flexRadioDefault2">
        Recherche par Artiste
      </label>
    </div></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
enum RADIO_BTN {
    ALBUM='ALBUM',
    ARTIST='ARTIST',
    NONE='NONE'
}

export default defineComponent({
  data() {
    return {
      enumRadioBtn: RADIO_BTN.NONE,
    }
  },
    methods: {
    clickRadioButton (isSelected:string){
       this.enumRadioBtn = isSelected === RADIO_BTN.ALBUM? RADIO_BTN.ALBUM : RADIO_BTN.ARTIST
    }},
    computed:{
      isDisabled():boolean{
        return this.enumRadioBtn === RADIO_BTN.NONE
      }
    }
})


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
.search-input{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
}
.input-group{
    margin-right: 2rem;
}
.form-ctn{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
