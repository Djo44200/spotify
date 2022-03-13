<template>
  <div class="library-ctn">
    <card :buttonAdd="false" :tracksItems="lists" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Card } from "@/components";

export default defineComponent({
  components: { Card },
  props: ["lists"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
});
</script>

<style lang="css">
.library-ctn {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
