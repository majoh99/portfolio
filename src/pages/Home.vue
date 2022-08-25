<template>
  <q-page class="bg-light">
    <section
      id="inicio"
      class="section row slider-wrapper q-col-gutter-lg q-pa-md"
    >
      <div class="col-xs-12 col-sm-4 col-md-4 flex items-center justify-center">
        <q-img
          class="img-profile"
          width="300px"
          src="~assets/photo_mariam_rosal_dev.png"
        />
      </div>
      <div class="col flex column justify-center text-dark">
        <div class="text-body1 text-uppercase ls-4">Bienvenido/a</div>
        <h1 class="text-weight-bold title q-mt-lg">
          Hola, soy Mariam Rosal<br />
          <VueWriter
            class="text-pink"
            :array="opt"
            :typeSpeed="50"
            :eraseSpeed="30"
          />
        </h1>
      </div>
    </section>
    <About></About>
    <Portfolio></Portfolio>
    <Skills></Skills>
  </q-page>
</template>

<script>
import VueWriter from "vue-writer";
import { defineComponent, ref } from "vue";
import About from "../components/About.vue";
import Portfolio from "../components/Portfolio.vue";
import Skills from "../components/Skills.vue";

export default defineComponent({
  components: {
    VueWriter,
    About,
    Portfolio,
    Skills,
  },
  setup() {
    return {
      opt: [
        "Desarrollador Web Frontend",
        "Ingeniero de Sistemas",
        "Consultor SEO",
      ],
    };
  },
});
</script>
