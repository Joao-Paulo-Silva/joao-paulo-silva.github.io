<script setup lang="ts"></script>

<template>
  <section class="page section-page">
    <img
      src="../assets/svg/Animated_Night_Sky.svg"
      class="svg-night-sky"
      alt=""
    />
    <div class="container">
      <img src="../assets/imgs/profile.png" alt="" class="img-profile" />
      <h1 class="title">João Paulo</h1>
      <h3 class="subtitle">
        Desenvolvedor Júnior e Acadêmico de Bacharelado em Sistemas de
        Informação
      </h3>

      <div class="social-media-container">
        <a
          class="social-link"
          href="https://github.com/Joao-Paulo-Silva"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'github']"
            class="social-media-icon icon-github"
          />
        </a>
        <a
          class="social-link"
          href="https://www.linkedin.com/in/jo%C3%A3o-paulo-462572250/"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            class="social-media-icon icon-linkedin"
          />
        </a>
      </div>

      <a class="next-page-container" href="#about">
        <h4>Mais informações</h4>
        <font-awesome-icon :icon="['fas', 'angles-down']" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.section-page {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: space-between;
  min-height: 400px;
  background-color: #2a143a;
}
.svg-night-sky {
  z-index: 0;
  position: absolute;
  min-width: 100vw;
  width: auto;
  height: 45vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  max-width: 100vw;
  padding: 0.2rem;
}

.img-profile {
  height: 15rem;
  width: auto;
  max-width: 80vw;
  border: 0.6rem solid #04aa6d;
  border-radius: 50%;
  margin-top: 1.5rem;
}

.title {
  margin-top: 0.5rem;
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
}

.subtitle {
  text-align: center;
  font-size: 1.5rem;
  max-width: 900px;
  line-height: 1.3;
  color: var(--vt-c-text-dark-2);
}

.social-media-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 2rem;
  min-width: 250px;
  margin: 0.5rem;
}
.social-link {
  text-decoration: none;
  color: var(--vt-c-text-dark-2);
}
.social-media-icon {
  margin: 1rem;
  cursor: pointer;
}

.icon-linkedin:hover {
  color: #0077b5;
}

.icon-github:hover {
  color: #2fbb4f;
}

@keyframes floating {
  0%,
  100% {
    text-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.6);
    transform: translate(0);
  }
  50% {
    text-shadow: 0 25px 20px 0 rgba(0, 0, 0, 0.2);
    transform: translate(0, 0.7rem);
  }
}

.next-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--vt-c-text-dark-2);
  margin-top: 0.8rem;
  animation: floating 8s ease-in-out infinite;
}

.next-page-container:hover {
  color: #fa8072;
}

@media (max-width: 760px) {
  .title {
    font-size: 2.2rem !important;
  }

  .subtitle {
    font-size: 1.2rem !important;
    line-height: 1.2;
  }
  .social-media-icon {
    margin: 0.7rem;
    cursor: pointer;
  }
  .next-page-container {
    margin-top: 0.5rem;
  }
}
</style>
