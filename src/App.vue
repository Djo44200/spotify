<template>
  <main class="main">
    <app-header :title="'DEV'" />
    <search />
  </main>
</template>
<script setup lang="ts">
import Search from "@/components/Search.vue";
import AppHeader from "@/components/AppHeader.vue";
import { onMounted } from "vue";
import store from "./store";

onMounted(() => {
  if (!store.state.isAuthenticated) {
    //Permettre de s'authentifier
  }
});
</script>
<style>
@import "./assets/base.css";
#app {
  width: 100%;
  height: 100vh;
  padding: 1rem;
  background-color: #181818;
  color: white;
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
