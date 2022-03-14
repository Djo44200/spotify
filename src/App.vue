<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getAuth } from "./services/spotifyAuth";

export default defineComponent({
  components: {},

  data() {
    return {};
  },
  async created() {
    //Credentials
    if (window.location.search.length === 0) {
      const url = await getAuth();
      window.location.href = url;
    }
  },
  methods: {},
  computed: {},
});
</script>

<style>
@import "./assets/base.css";
#app {
  width: 100%;
  min-height: 100vh;
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
