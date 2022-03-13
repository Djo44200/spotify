<template>
  <div class="library-ctn">
    <navigator class="nav" @onChoiceSelected="choiceSelected" :choiceRouter="changeRouter" />
    <div class="container-ctn" >
      <app-header :title="'Librairie'" />
      <library :lists="libraryLists" />
    </div> 
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Navigator from "@/components/Navigator.vue";
import { Library,AppHeader } from "@/components";
import { CHOICENAV } from "@/models/RouterType";

export default defineComponent({
  components: { Navigator,Library,AppHeader },

  data() {
    return {  };
  },
  async created() {},
  methods: {
    choiceSelected(choice: CHOICENAV) {
    choice === CHOICENAV.LIBRARY ? this.$router.push({name:'Library'}):this.$router.push({name:'Search'});
    this.$store.dispatch("changeRouterView", choice);
    },
  },
  computed: {
    ...mapGetters({
      libraryLists: "library/getLibraryAlbums",
      changeRouter: "getRouterView",
    }),
  },
});
</script>

<style>

.library-ctn{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.nav {
  display: flex;
    align-items: flex-start;
    align-content: center;
  height: 100%;
  width: 10%;
  align-self:flex-start;
}
.container-ctn {
  display: flex;
  flex-direction: column;
  width: 90%;
}

</style>
