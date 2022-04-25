<template>
  <div id="app" :class="theme ? 'light-theme' : 'dark-theme'">
    <Navigation />
    <Cover />
    <img alt="Vue logo" src="./assets/logo.png" />
    <button class="btn" @click="changeTheme">Hola</button>
    <code>hola</code>
  </div>
</template>

<script>
import Cover from './components/Cover.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Cover,
    Navigation,
  },
  data() {
    return {
      theme: false, // Modo Light true - Dark false
    };
  },
  methods: {
    changeTheme() {
      const root = document.querySelector(':root');

      this.theme = !this.theme;

      if (this.theme) {
        root.style.setProperty('--background-color', '#f5f5f5');
      } else {
        root.style.setProperty('--background-color', '#1f2022');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* styles goes here */
</style>
