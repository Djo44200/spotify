<template>
  <div class="header-ctn">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
enum RADIO_BTN {
  ALBUM = "ALBUM",
  ARTIST = "ARTIST",
  NONE = "NONE",
}

export default defineComponent({
  data() {
    return {};
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
</style>
