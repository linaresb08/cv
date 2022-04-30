<template>
  <section>
    <h3 data-subtitle="Cursos">Capacitaciones</h3>
    <ul>
      <li v-for="course in courses" :key="course.name">
        <span>{{ course.name }}</span>
        <small>{{ course.description }}</small>

        <p>
          <fa-icon icon="building" />
          {{ course.institute }}
        </p>
        <p>
          <fa-icon icon="calendar-check" />
          {{ course.duration }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Trainings',
  data() {
    return {
      courses: [
        {
          name: 'Máster en frameworks JavaScript',
          description: 'Básico de Angular, React y Vue',
          institute: 'Udemy',
          duration: '263 clases online',
          logo: '',
        },
        {
          name: 'Curso de Inglés de 3 Niveles',
          description: 'Básico, Intermedio y Conversacional',
          institute: 'American English College',
          duration: '12 meses',
          logo: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
/* styles goes here */
</style>
