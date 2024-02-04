<script setup lang="ts">
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Project from "../components/Project.vue";
import ToggleMenu from "../components/ToggleMenu.vue";
import Skills from "../components/Skills.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <main>
    <ToggleMenu />
    <Home />
    <About />
    <Project />
    <Skills />
    <Footer/>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
