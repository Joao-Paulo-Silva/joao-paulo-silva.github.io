<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleMenu",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    handleClickOutside(event: MouseEvent) {
      if (
        this.isOpen &&
        !(this.$refs.menu as HTMLElement).contains(event.target as Node)
      ) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
});
</script>

<template>
    <div class="content-menu" ref="menu">
      <button @click="toggleMenu" class="menu-toggle">
        <font-awesome-icon
          :icon="isOpen ? ['fas', 'times'] : ['fas', 'bars']"
          class="menu-icon"
        />
      </button>
      <transition name="fade">
        <div v-if="isOpen" class="menu" @click.self="closeMenu">
          <a href="#" class="item-menu">Inicio.</a>
          <a href="#about" class="item-menu">Sobre.</a>
          <a href="#project" class="item-menu">Projetos.</a>
          <a href="#skills" class="item-menu">Habilidades.</a>
        </div>
      </transition>
    </div>
  </template>

<style>
.content-menu {
  display: flex;
  flex-direction: column;
  align-items: end;
  position: fixed;
  z-index: 20;
  top: 1rem;
  right: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.menu-toggle {
  padding: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.menu-icon {
  font-size: 1.8rem;
  color: var(--vt-c-text-dark-2);
}

.menu {
  padding: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: var(--vt-c-divider-dark-1);
  border-radius: 5px;
}

.item-menu {
  text-decoration: none;
  color: var(--vt-c-text-dark-2);
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
  display: flex;
}

.item-menu:hover {
  color: #f54d64;
  z-index: 11;
}
</style>
