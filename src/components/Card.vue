<script lang="ts">

export default {
  name: "Card",
  props: {
    title: { type: String, required: true },
    describe: { type: String, required: true },
    pathImg: { type: String, required: true },
    link: { type: String, required: false },
  }
};

</script>

<template>
  <a class="link-card" :href="link">
  <div class="card-container" >
    <div class="img-container">
      <img class="img-card" :src="pathImg" alt=""/>
    </div>
    <div class="content">
      <h1 class="content-title">{{ title }}</h1>
      <p class="content-description">{{ describe }}</p>
    </div>
    <div class="footer"></div>
  </div>
  </a>
</template>

<style scoped>
.link-card{
  text-decoration: none;
  color: var(--vt-c-text-dark-2);
  height: auto;
  min-height: 350px;
  min-width: 260px;
  max-width: 350px;
  margin: 1rem 0.5rem;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  border: 1.5px solid #34d399;
  height: 100%;
  width: auto;
  min-height: 350px;
  min-width: 260px;
  background-color: #18181b;
  overflow: hidden;
  cursor: pointer;
}

.card-container:hover{
  box-shadow: 0px 0px 15px rgba(92, 92, 92, 0.438);
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a0a6ab;
  height: 45%;
  min-height: 80px;
  min-width: 250px;
}

.img-card{
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0.2rem;
}
.content-title {
  font-size: 1.5rem;
  color: #f5f5f5;
  font-weight: 600;
}

.content-description {
  text-align: justify;
  margin: 0.5rem;
}


@media (max-width: 760px){
  .container-project{
    width: 70vw !important;
  }
  .content-title {
  font-size: 1.3rem !important;
}

.content-description {
  margin: 0.3rem !important;
  font-size: 0.95rem;
}
}


</style>
