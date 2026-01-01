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

<style lang="scss">
.content-menu {
  display: flex;
  flex-direction: column;
  align-items: end;
  position: fixed;
  z-index: 20;
  top: 1.5rem;
  right: 1.5rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--bg-glass);
  border-radius: 50%;
  border: 1px solid var(--color-border);
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px var(--color-shadow);
  backdrop-filter: blur(0.8rem);
  &:hover {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--text-primary);
    transform: rotate(90deg);

    .menu-icon {
      color: var(--text-primary);
    }

  }
}
.menu-icon {
  font-size: 1.8rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  min-width: 10rem;
  background-color: var(--bg-glass);
  padding: 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-border);
  backdrop-filter: blur(0.8rem);
  box-shadow: 0 4px 6px var(--color-shadow);
}

.item-menu {
  display: flex;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.2s ease;
  border-left: 2px solid transparent;
  &:hover {
    padding-left: 0.5rem;
    color: var(--color-primary);
    border-left: 2px solid var(--color-primary);
  }
}
</style>
