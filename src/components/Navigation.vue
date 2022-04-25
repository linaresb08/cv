<template>
  <header class="nav__container">
    <div class="nav__brand">
      <a href="#">
        <img src="#" alt="Logo" />
      </a>
    </div>
    <nav class="nav__list">
      <a v-for="link in links" :key="link.name" :href="link.anchorTag">
        <fa-icon :icon="link.icon" />
        {{ link.name }}
      </a>
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
          icon: 'graduation-cap',
        },
        {
          name: 'Experiencia',
          anchorTag: '#',
          icon: 'suitcase',
        },
        {
          name: 'Herramientas',
          anchorTag: '#',
          icon: 'desktop',
        },
        {
          name: 'Contacto',
          anchorTag: '#',
          icon: 'phone',
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
