<template>
  <div class="navigator-ctn">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: choice === enumNav.SEARCH }"
          @click="onSelect(enumNav.SEARCH)"
          >Recherche</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: choice === enumNav.LIBRARY }"
          @click="onSelect(enumNav.LIBRARY)"
          >Bibliothèque</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export enum CHOICENAV {
  SEARCH,
  LIBRARY,
}

export default defineComponent({
  data() {
    return { enumNav: CHOICENAV, choice: CHOICENAV.SEARCH };
  },
  methods: {
    onSelect(choice: CHOICENAV) {
      this.choice = choice;
      this.$emit("onChoiceSelected", choice);
    },
  },
  computed: {},
});
</script>

<style lang="css">
.navigator-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.nav-item a {
  color: white;
}
.nav-item a:hover {
  color: #1ed760;
}
.active {
  color: #1ed760 !important;
}
</style>
