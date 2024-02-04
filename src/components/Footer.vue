<script setup lang="ts"></script>

<template>
  <section class="page section-page">
    <div class="content-itens">
        <h2 class="title">Contato:</h2>
        <div class="itens">
            <a href="https://www.linkedin.com/in/jpsilvabarr/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /> Linkedin</a>
            <a href="https://github.com/Joao-Paulo-Silva" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /> Github</a>
            <a href="https://www.instagram.com/jpsilva689/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /> Instagram</a>
        </div>
    </div>
    <div class="content-itens">
        <h2  class="title">Mais:</h2>
        <div class="itens">
            <a href="https://ais-package.github.io/pt-br/" target="_blank"><font-awesome-icon :icon="['fas', 'cubes']" /> AISP - Python</a>
            <a href="https://pypi.org/user/jpsilvabarr/" target="_blank"><font-awesome-icon :icon="['fas', 'cube']" /> Pypi</a>
        </div>
    </div>
  </section>
</template>

<style scoped>
.section-page {
  display: flex;
  position: relative;
  align-items: stretch;
  min-height: 200px;
  width: 100vw;
  background-color: #2a143a;
}

.content-itens{
    margin: 2rem;
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 100%;
}

.title{
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--vt-c-text-dark-1);
}

.itens{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
}


.itens a{
    text-decoration: none;
    color: var(--vt-c-text-dark-2);
    margin-bottom: 0.2rem;
}

.itens a:hover{
    color: #f54d64;
}

</style>
