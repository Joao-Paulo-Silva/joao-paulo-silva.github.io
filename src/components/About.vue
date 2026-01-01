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
          src="../assets/imgs/profile-about.webp"
          alt=""
          class="img-profile"
        />
        <div class="profile-info">
          <h2 class="name">João Paulo</h2>
          <span class="role">Full Stack Developer</span>
        </div>
      </div>
      <div class="content-text">
        <h2 class="title-text">
          Bacharel em Sistemas de Informação pelo IFNMG -Campus Salinas.
        </h2>
        <p class="text">
          Desenvolvedor full stack com experiência em Django, React TypeScript,
          Docker, HTML, CSS e Bootstrap. Atualmente atuo com PHP e Vue.js.
        </p>
        <p class="text">
          Possuo experiência no desenvolvimento e manutenção de bibliotecas
          em Python, incluindo a biblioteca AISP, baseada em Sistemas
          Imunológicos Artificiais, um ramo da Computação Natural.
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
  min-height: 100dvh;
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
  height: 100%;
  width: 100%;
  max-width: 18rem;
  min-width: 200px;
  min-height: 250px;
  max-height: 60dvh;
  background-color: #7f7f7f;
  box-shadow: 0px 5px 10px #62047344;
  margin: auto;
  &:hover {
    .img-profile {
      transform: scale(1.2);
    }
    .profile-info {
      transform: translateY(calc(-50% + 0.5rem));
    }
  }
}

.img-profile {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.profile-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.25rem;
  padding: 0.25rem;
  color: var(--text-primary);
  backdrop-filter: blur(1.5rem);
  transition: transform 0.5s ease;
  margin-top: -0.5rem;
  .name {
    font-weight: 900;
    font-size: 1.5rem;
  }
  .role {
    color: var(--color-primary);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
    padding-bottom: 0.5rem;
  }
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
  color: var(--text-secondary);
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
