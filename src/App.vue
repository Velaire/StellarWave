<template>
  <div id="app">
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from "./Views/Landing.vue";

export default {
  name: "App",
  components: {
    LandingPage,
  },
};
</script>

<style>
@import "tailwindcss/tailwind.css";
/* Add global styles here */
</style>
