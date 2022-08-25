<template>
  <div
    class="fullscreen bg-light text-dark text-center q-pa-md flex flex-center"
  >
    <div class="row justify-center">
      <h1 class="col-12 title">404</h1>
      <h3 class="col-12 title text-blue-grey-8">
        Oops. La página que estás buscando no existe...
      </h3>
      <div class="col-12">
        <q-btn
          class="q-mt-xl"
          color="primary"
          unelevated
          icon="eva-arrow-back"
          :to="{ name: 'home' }"
          label="Ir al inicio"
          no-caps
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
