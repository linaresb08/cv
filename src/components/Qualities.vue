<template>
  <section>
    <h3 data-subtitle="Generales">Cualidades</h3>

    <div>
      <div>
        <h4>Idiomas</h4>
        <ol>
          <li>
            Español
            <p>Nativo</p>

            <ul>
              <li class="check-double">Lectura</li>
              <li class="check-double">Escritura</li>
              <li class="check-double">Oral</li>
              <li class="check-double">Auditiva</li>
            </ul>
          </li>
          <li>
            Inglés
            <p>Intermedio - B1</p>

            <ul>
              <li class="check-double">Lectura</li>
              <li class="check-double">Escritura</li>
              <li class="check">Oral</li>
              <li class="check">Auditiva</li>
            </ul>
          </li>
        </ol>
      </div>
      <div>
        <h4>Personales</h4>
        <ul>
          <li>Autodidacta</li>
          <li>Buenas relaciones interpersonales</li>
          <li>Colaboradora</li>
          <li>Habilidades de adaptación a cualquier entorno</li>
          <li>Proactiva</li>
          <li>Puntual y responsable</li>
        </ul>
      </div>
      <div>
        <h4>Laborales</h4>
        <ul>
          <li>Adaptabilidad a horarios flexibles</li>
          <li>Capacidad para trabajar bajo presión</li>
          <li>Habilidad para aprender programas rápidamente</li>
          <li>Trabajo en equipo</li>
          <li>Sentido de pertenencia empresarial</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Qualities',
};
</script>

<style scoped lang="scss">
ol {
  counter-reset: language-counter;
  list-style: none;

  & > li {
    counter-increment: language-counter;

    &::before {
      content: counter(language-counter) '°';
    }
  }
}

ul {
  list-style-type: none;

  li::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }

  li.check-double::before {
    content: '\f560';
  }
  li.check::before {
    content: '\f00c';
  }
}
</style>
