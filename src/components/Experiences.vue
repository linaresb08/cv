<template>
  <section id="experiencia">
    <h3 data-subtitle="Laboral">Experiencia</h3>
    <dl>
      <template v-for="experience in experiences">
        <dt :key="`${experience.cargo}-${experience.place}`">
          {{ experience.cargo }}
          {{ experience.duration }}
          {{ experience.address }}
        </dt>
        <dd :key="`${experience.cargo}-${experience.place}`">
          {{ experience.place }}
          {{ experience.description }}
        </dd>
      </template>
    </dl>
  </section>
</template>

<script>
export default {
  name: 'Experiences',
  data() {
    return {
      experiences: [
        {
          place: 'Ingeniería al Servicio Tecnosocial, C. A. (CAISerT)',
          address: 'Valera. Estado Trujillo.',
          duration: 'Mayo 2018 - Actualidad', // Calcular automáticamente los años
          cargo: 'Desarrolladora Front-end',
          description:
            'Desarrollo de sistemas y páginas web adaptables e intuitivas, con Bitbucket y GitHub como gestores de versiones, implementando VueJs para gestionar la información de las vistas, frameworks y pre-procesadores de CSS para estilizar los sitios web de manera prática y atractiva.',
        },
        {
          place: 'Universidad Nacional Experimental "Simón Rodríguez (UNESR)',
          address: 'Valera. Estado Trujillo.',
          duration: 'Enero 2018 - Abril 2018', // Calcular automáticamente los años
          cargo: 'Pasante',
          description:
            'Realización de mantenimiento preventivo y correctivo a los equipos, atención a usuarios, actualizaciones de sistema, actividades de soporte técnico a las oficinas de la universidad.',
        },
        {
          place: 'Universidad Valle del Momboy (UVM)',
          address: 'San Rafael de Carvajal. Estado Trujillo.',
          duration: 'Enero 2013 - Julio 2015', // Calcular automáticamente los años
          cargo: 'Becada',
          description:
            'Realización de mantenimiento preventivo y correctivo a los equipos del laboratorio, actualizaciones de sistema, atención a estudiantes, actividades de soporte técnico a las oficinas.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// styles
</style>
