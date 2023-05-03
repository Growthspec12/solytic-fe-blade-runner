<template>
  <the-header />
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import TheHeader from "./components/TheHeader.vue";
import { useStore } from "vuex";

const store = useStore();

async function initToken () {
  await store.dispatch("checkToken");
}

onMounted(() => {
  initToken();
});
</script>

<style lang="scss" scoped>
</style>

<!-- import TheLoader from "@/components/TheLoader.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TheLoader,
    TheHeader
  },

  data () {
    return {
      isUserLoaded: null
    };
  },

  computed: {
    ...mapGetters(["isDarkMode"])
  },

  watch: {
    isDarkMode (isDarkMode) {
      isDarkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
    }
  },

  mounted () {
    this.initToken();
  },
  methods: {
    async initToken () {
      this.isUserLoaded = false;
      await this.$store.dispatch("checkToken");
      await this.$store.dispatch("updateMode");
      if (this.isDarkMode) {
        document.body.classList.add("dark-mode");
      }
      this.isUserLoaded = true;
    }
  }

}; -->
