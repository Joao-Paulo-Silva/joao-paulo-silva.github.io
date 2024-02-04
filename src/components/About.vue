<script setup lang="ts"></script>

<template>
  <section class="page section-page" id="about">
    <img
      src="../assets/svg/Animated_Window_Scene.svg"
      class="svg-window-scene"
      alt=""
    />
    <div class="content-about">
      <div class="content-profile">
        <img
          src="../assets/imgs/profile-about.png"
          alt=""
          class="img-profile"
        />
        <div class="name-profile">
          <h1 class="name">João Paulo</h1>
        </div>
      </div>
      <div class="content-text">
        <h2 class="title-text">
          Sou um estudante universitário no IFNMG - Salinas na área de Sistemas
          de Informação, minha jornada profissional é focado em desenvolvimento.
        </h2>
        <p class="text">
          Em 2019, iniciei minha graduação em Sistemas de Informação e me
          envolvi ativamente na empresa júnior SIFSoft, onde contribuí para o
          desenvolvimento do front-end e back-end do site usando Django, Docker,
          HTML e CSS.
        </p>
        <p class="text">
          Em projetos comerciais da SIFSoft, atuei como desenvolvedor front-end
          com React TS, e tenho experiência em diversas linguagens e frameworks,
          incluindo Django, React.js e Bootstrap.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-page {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #252525;
}

.svg-window-scene {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 1%;
  max-width: 60%;
}

.content-about {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 1;
  margin: auto;
  margin-bottom: 15%;
  padding: 1rem;
}

.content-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 30px 30px 5px 5px;
  height: auto;
  width: auto;
  max-width: 350px;
  min-width: 200px;
  min-height: 250px;
  max-height: 50vh;
  background-color: #7f7f7f;
  box-shadow: 0px 5px 10px #62047344;
  margin: auto;
}

.img-profile {
  width: 15rem;
  height: auto;
  max-width: 350px;
  min-width: 100%;
  min-height: 100%;
  margin: 0;
}

.name-profile {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0;
  height: 100%;
  color: #2a143a;
}

.name {
  margin-bottom: 0.5rem;
  font-weight: 900;
  font-size: 1.5rem;
}

.content-text {
  width: 100%;
  max-width: 60vw;
  margin: 1.5rem;
}

.title-text {
  max-width: 98%;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: #fa8072;
}

.text {
  max-width: 65%;
  font-size: 1.2rem;
  text-align: justify;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

@media (max-width: 760px) {
  .content-profile {
    display: none !important;
  }
  .content-text {
    max-width: 90vw !important;
    margin: 1rem !important;
  }
  .title-text {
    font-size: 1.5rem !important;
  }

  .text {
    font-size: 1rem !important;
  }

  .svg-window-scene {
    padding-right: 0% !important;
    max-width: 70% !important;
  }
}
</style>
