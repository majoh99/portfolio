<script setup>
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref } from "vue";
import { useProjects } from "src/stores/project";
const route = useRoute();

const proyecto = useProjects();

onMounted(() => {
  proyecto.getProject(route.params.id);
});
</script>

<template>
  <q-page class="bg-light">
    <section class="section row q-col-gutter-lg q-pa-md container">
      <div class="col-12">
        <div class="q-py-md q-gutter-sm">
          <q-breadcrumbs>
            <q-breadcrumbs-el
              icon="eva-home"
              :to="{ name: 'home' }"
              label="Inicio"
            />
            <q-breadcrumbs-el :label="proyecto.proyecto.name" />
          </q-breadcrumbs>
        </div>
      </div>
      <div class="col-12 flex justify-center">
        <h1 class="title">{{ proyecto.proyecto.name }}</h1>
      </div>
      <div class="row col-12 q-col-gutter-md q-mb-xl items-start">
        <div class="col-12 col-sm-12 col-md-8 flex items-center justify-center">
          <q-img
            class="rounded-borders"
            fit="contain"
            style="max-height: 500px"
            :src="'../../public/' + proyecto.proyecto.banner"
          />
        </div>
        <div class="col-12 col-sm-12 col-md-4 flex">
          <div class="col flex bg-white rounded-borders q-pa-lg">
            <div class="flex column">
              <h4
                v-if="proyecto.proyecto.description"
                class="q-mb-sm q-mt-sm text-weight-medium"
              >
                Proyecto
              </h4>
              <div
                v-if="proyecto.proyecto.description"
                class="text-blue-grey-8 q-mb-lg text-justify"
              >
                {{ proyecto.proyecto.description }}
              </div>
              <h4
                v-if="proyecto.proyecto.category"
                class="q-mb-sm q-mt-sm text-weight-medium"
              >
                Categoría
              </h4>
              <div
                v-if="proyecto.proyecto.category"
                class="text-blue-grey-8 q-mb-lg"
              >
                {{ proyecto.proyecto.category.join(", ") }}
              </div>
              <h4
                v-if="proyecto.proyecto.skills"
                class="q-mb-sm q-mt-sm text-weight-medium"
              >
                Tecnologías
              </h4>
              <div
                v-if="proyecto.proyecto.skills"
                class="text-blue-grey-8 q-mb-lg"
              >
                {{ proyecto.proyecto.skills.join(", ") }}
              </div>
              <div v-if="proyecto.proyecto.url != ''">
                <q-btn
                  flat
                  :href="proyecto.proyecto.url"
                  target="_blank"
                  style="background: #faeaef"
                  icon="eva-external-link-outline"
                  label="Visitiar sitio web"
                  color="primary"
                  no-caps
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style></style>
