<template>
  <TheNavbar />
  <router-view />

  <!-- <HomePage/> -->
</template>

<script>
// import HomePage from './components/HomePage.vue'
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>

