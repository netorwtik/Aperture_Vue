<template>
  <div>
    <button @click="toggleMenu" :class="{ 'is-active': isActive }" class="burger-menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav v-if="isActive" class="menu">
      <a class="nav-item" href="#Business">Business areas</a>
      <a class="nav-item" href="#Featured">Featured images</a>
      <router-link class="nav-item" to="/gear">Gear cage</router-link>
      <a class="nav-item" href="https://vk.com/netorwtik" target="_blank">Contact</a>
      <div class="btn">
        <a class="button" href="#" @click.prevent="openModal">Get template</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    openModal() {
      this.$emit('open-modal');
    },
  },
};
</script>

<style scoped>
.burger-menu {
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 30px;
  justify-content: space-around;
  cursor: pointer;
  border: none;
  background: transparent;
}

.burger-menu span {
  display: block;
  width: 100%;
  height: 4px;
  background: #333;
  transition: all 0.3s ease-in-out;
}

.burger-menu.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger-menu.is-active span:nth-child(2) {
  opacity: 0;
}

.burger-menu.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.menu {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  top: 50px;
  right: 0;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-item {
  padding: 15px;
  text-decoration: none;
  color: #333;
}

.nav-item:hover {
  color: #007bff;
}
</style>
