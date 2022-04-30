<template>
  <section id="educacion">
    <h3 data-subtitle="Formación">Educación</h3>

    <ul>
      <li v-for="institute in institutes" :key="institute.startDate">
        <span>{{ institute.level }}</span>
        <small>{{ institute.startDate }} - {{ institute.endDate }}</small>
        <p>
          <span class="text-bold">{{ institute.name }}</span>
          <small>{{ institute.address }}</small>
        </p>
        <p class="title">{{ institute.title }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      institutes: [
        {
          startDate: 'Septiembre 2013',
          endDate: 'Octubre 2018',
          level: 'Universidad',
          name: 'Universidad Valle del Momboy (UVM)',
          address: 'San Rafael de Carvajal, Trujillo. Venezuela.',
          title: 'Ingeniero de Computación',
        },
        {
          startDate: 'Julio 2007',
          endDate: 'Julio 2013',
          level: 'Bachillerato',
          name: 'E.T.C.R.Z. Pedro García Leal',
          address: 'Valera, Trujillo. Venezuela.',
          title: 'Téc. Medio en Informática',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
/* styles goes here */
</style>
