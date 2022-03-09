<template>
  <div class="header-ctn">
    <img class="logo" :src="spotifyLogo" alt="my-logo" />
    <span class="title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import spotifyLogo from "@/assets/SpotifyLogo.svg";

export default defineComponent({
  data() {
    return { spotifyLogo };
  },
  props: { title: String },
  methods: {},
  computed: {},
});
</script>

<style lang="css">
.header-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 240px;
}
</style>
