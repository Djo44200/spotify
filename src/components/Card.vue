<template>
  <div class="card-ctn">
    <!-- Mise en place d'une carte pour l'affichage -->
    <div class="card">
      <a :href="url" target="_blank"
        ><img :src="urlImg" class="card-img-top" alt="image"
      /></a>
      <!-- Bouton d'ajout -->
      <button
        v-if="buttonAdd"
        type="button"
        class="btn btn-add"
        @click="add(object)"
      >
        <img :src="addLogo" alt="Bootstrap" width="32" height="32" />
      </button>
      <!-- Bouton de suppression -->
      <button
        v-if="buttonRemove"
        type="button"
        class="btn btn-add"
        @click="remove(object)"
      >
        <img :src="removeLogo" alt="Bootstrap" width="32" height="32" />
      </button>
      <div class="card-body">
        <p class="card-title">
          {{ title }}
        </p>
        <p class="card-resume">
          <span>{{ resumeOne }}</span>
          <span>{{ resumeTwo }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import addLogo from "@/assets/add.svg";
import removeLogo from "@/assets/remove.svg";

export default defineComponent({
  props: [
    "buttonAdd",
    "url",
    "urlImg",
    "title",
    "resumeOne",
    "resumeTwo",
    "object",
    "buttonRemove"
  ],
  data() {
    return {
      addLogo,removeLogo
    };
  },
  methods: {
    // Ajout à la bibliothèque
    add(object: object) {
      this.$emit("onAdd", object);
    },
    // Ajout à la bibliothèque
    remove(object: object) {
      this.$emit("onRemove", object);
    },
  },
});
</script>

<style lang="css">
.card-ctn {
  display: flex;
  align-items: center;
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
