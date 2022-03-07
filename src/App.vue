<template>
  <main>
    <app-header :title="'SPOTIFY'" />
    <search />
  </main>
</template>
<script setup lang="ts">
import Search from "@/components/Search.vue";
import AppHeader from "@/components/AppHeader.vue";
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
.title {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-bottom: 2rem;
}
</style>
