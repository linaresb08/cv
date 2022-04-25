<template>
  <main id="inicio" data-decorative-text="Desarrolladora">
    <img src="#" alt="Betzabeth Linares" />
    <div>
      <code>Hello World!</code>
      <h2>Soy <strong>Betzabeth Linares</strong></h2>
      <small>Desarrolladora Front-end | Ing. de Computación</small>
      <p>
        Amante del diseño y las buenas prácticas, una persona responsable,
        colaboradora, autodidacta, con capacidades de resolución de problemas y
        trabajo en equipo.
      </p>
      <p>
        Mi fortaleza es el desarrollo de los diseños a páginas/sistemas web
        adaptables.
      </p>
      <a href="#contacto" class="btn">Contactar</a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Cover',
};
</script>

<style scoped lang="scss">
[data-decorative-text]::before {
  content: attr(data-decorative-text);
}
strong {
  font-size: inherit;
}
</style>
