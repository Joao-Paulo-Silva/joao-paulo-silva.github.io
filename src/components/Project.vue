<script setup lang="ts">
import Card from "./Card.vue";
import {projects} from '../constants/projects.ts'

</script>
<template>
  <section class="page section-page" id="project">
    <img src="../assets/svg/Animated_Robot_Working.svg" class="svg-robot-work" alt="">
    <h1 class="title">Projetos</h1>
    <div class="container-project">
      <Card
        v-for="item in projects"
        :key="item.id"
        :describe="item.describe"
        :title="item.title"
        :pathImg="item.pathImg"
        :link="item.link"
      />
    </div>
  </section>
</template>

<style scoped>
.section-page {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  height: auto;
  min-height: 100vh;
  max-width: 100vw;
  background-color: rgb(22, 22, 22);
}

.title {
  font-size: 3rem;
  font-weight: 900;
  margin: 1rem;
}

.container-project {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 90vw;
  height: auto;
  padding: 0.5rem;
  z-index: 1;
}

.svg-robot-work{
  z-index: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: -5px;
  max-width: 50%;
  width: 60vw;
}

@media (max-width: 760px){
  .container-project{
    width: 70vw !important;
  }
  .svg-robot-work{
    max-width: 60vw !important;
  }
}

</style>
