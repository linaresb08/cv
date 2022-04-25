<template>
  <header class="nav__container">
    <div class="nav__brand">
      <a href="#">
        <img src="#" alt="Logo">
      </a>
    </div>
    <nav class="nav__list">
      <a v-for="link in links" :key="link.name" :href="link.anchorTag">
        {{ link.name }}
      </a>
      <fa-icon icon="bars" />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          name: 'Educación',
          anchorTag: '#',
          icon: '',
        },
        {
          name: 'Experiencia',
          anchorTag: '#',
          icon: '',
        },
        {
          name: 'Herramientas',
          anchorTag: '#',
          icon: '',
        },
        {
          name: 'Contacto',
          anchorTag: '#',
          icon: '',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav__container {
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  position: fixed;
  width: 100%;
}
</style>
