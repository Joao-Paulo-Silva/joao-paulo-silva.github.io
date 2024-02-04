<script setup lang="ts">
  import SkillCard from './SkillCard.vue';
  import {language, frameworks} from '../constants/skills.ts'
</script>

<template>
  <div class="page section-page" id="skills">
    <h1 class="title">Habilidades</h1>
    <h3 class="subtitle">Linguagem de Programação</h3>
    <div class="container-skills">
        <SkillCard
          v-for="item in language"
          :icon="item.icon"
          :title="item.title"
        />
    </div>
    <h3 class="subtitle">Frameworks</h3>
    <div class="container-skills">
        <SkillCard
          v-for="item in frameworks"
          :icon="item.icon"
          :title="item.title"
        />
    </div>
  </div>
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
  background-color: #171717;
}

.title {
  font-size: 3rem;
  font-weight: 900;
  margin: 1rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.subtitle{
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #fec11f;
}
.container-skills{
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
  width: 90vw;
  height: auto;
  padding: 0.5rem;
  z-index: 1;
}

</style>
