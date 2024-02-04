<script lang="ts">
import { VueElement } from 'vue';

export default {
  name: "SkillCard",
  props: {
    title: { type: String, required: true },
    icon: { type: Array as () => Array<string>, required: true },
  }
};
</script>

<template>
  <div class="card-container" >
    <font-awesome-icon :icon=icon class="icon"/>
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<style scoped>
    .card-container{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: auto;
        height: 100vmin;
        max-width: 180px;
        min-width: 140px;
        max-height: 180px;
        min-height: 140px;
        border-radius: 2px;
        box-shadow: 0px 5px 8px 5px #11111198;
        margin: 1rem;
    }

    .icon{
      margin-top: 0.5rem;
      font-size: 3rem;
      color: var(--vt-c-text-dark-2);
    }

    .title{
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.2rem solid #34d399;
      color: var(--vt-c-text-dark-2);
    }

</style>
