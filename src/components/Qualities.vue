<template>
  <section>
    <h3 data-subtitle="Generales">Cualidades</h3>

    <div>
      <div>
        <h4>Idiomas</h4>
        <ol class="languages-list">
          <li v-for="language in languages" :key="language.name">
            {{ language.name }}
            <small>{{ language.level }}</small>
            <ul class="icon-list">
              <li v-for="(icon, skill, index) in language.skills" :key="index">
                <fa-icon :icon="icon" />
                {{ skill }}
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div>
        <h4>Personales</h4>
        <ul class="icon-list">
          <li v-for="(item, icon) in personal" :key="icon">
            <fa-icon :icon="icon" />
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <h4>Laborales</h4>
        <ul class="icon-list">
          <li v-for="(item, icon) in work" :key="icon">
            <fa-icon v-if="icon === 'slideshare'" :icon="['fab', icon]" />
            <fa-icon v-else :icon="icon" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Qualities',
  data() {
    return {
      languages: [
        {
          name: 'Español',
          level: 'Nativo',
          skills: {
            'Lectura': 'check-double', // eslint-disable-line
            'Escritura': 'check-double', // eslint-disable-line
            'Oral': 'check-double', // eslint-disable-line
            'Auditiva': 'check-double', // eslint-disable-line
          },
        },
        {
          name: 'Inglés',
          level: 'Intermedio - B1',
          skills: {
            'Lectura': 'check-double', // eslint-disable-line
            'Escritura': 'check-double', // eslint-disable-line
            'Oral': 'check', // eslint-disable-line
            'Auditiva': 'check', // eslint-disable-line
          },
        },
      ],
      personal: {
        'book-reader': 'Autodidacta',
        'users': 'Buenas relaciones interpersonales', // eslint-disable-line
        'hands-helping': 'Colaboradora',
        'magic': 'Habilidades', // eslint-disable-line
        'walking': 'Proactiva', // eslint-disable-line
        'user-clock': 'Puntual y responsable',
      },
      work: {
        'calendar-check': 'Adaptabilidad a horarios flexibles',
        'clock': 'Capacidad para trabajar bajo presión', // eslint-disable-line
        'desktop': 'Habilidad para aprender programas rápidamente', // eslint-disable-line
        'slideshare': 'Trabajo en equipo', // eslint-disable-line
        'dna': 'Sentido de pertenencia empresarial', // eslint-disable-line
      },
    };
  },
};
</script>

<style scoped lang="scss">
ol.languages-list {
  counter-reset: language-counter;

  & > li {
    counter-increment: language-counter;
    font-size: 1.34rem;

    &::before {
      content: counter(language-counter) '°';
    }

    & + li {
      margin-top: 1.5rem;
    }
  }

  & ul > li {
    font-size: initial;
  }

  small {
    display: block;
    margin: -0.2rem 0 1rem 1.7rem;
  }
}
</style>
