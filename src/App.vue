<template>
  <main>
    <span>TEST</span>
    <search />
  </main>
</template>
<script setup lang="ts">
import Search from "@/components/Search.vue";
import { onMounted } from "vue";
import store from "./store";

onMounted(() => {
  if (store.state.isAuthenticated) {
    console.log("mounted in the composition api!", store.state.isAuthenticated);
  }
});
</script>
<style>
@import "./assets/base.css";
#app {
  width: 100%;
  height: 100%;
  padding: 1rem;
}
</style>
