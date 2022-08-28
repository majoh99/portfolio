<script setup>
import { defineComponent, onMounted, ref } from "vue";
import { useProjects } from "src/stores/project";
import { RouterLink, useRouter } from "vue-router";

const proyecto = useProjects();
const router = useRouter();

const openProject = (id) => {
  router.push({ name: "project", params: { id: id } });
};

onMounted(() => {
  proyecto.projectList();
});
</script>

<template>
  <section id="portafolio" class="section bg-light q-py-xl q-px-md">
    <div class="container">
      <div class="col-12 flex justify-center">
        <h2 class="title q-mb-md">Portafolio</h2>
      </div>
      <div class="col-12 flex justify-center">
        <div class="text-subtitle1 text-blue-grey-8 text-center">
          Aquí puedes ver algunos de los proyectos en los que he colaborado
        </div>
      </div>
      <div class="row flex items-start q-mt-xl q-col-gutter-md">
        <div
          v-for="item in proyecto.proyectos.slice().reverse()"
          :key="item.id"
          class="col-xs-12 col-sm-6 col-md-4 q-mb-lg"
        >
          <div class="card-project">
            <RouterLink :to="`/project/${item.id}`">
              <div class="q-mb-sm">
                <q-img
                  :alt="'Banner ' + item.name"
                  class="rounded-borders cursor-pointer"
                  :src="item.banner"
                />
              </div>
            </RouterLink>
            <div class="flex column">
              <div class="text-body1 q-mb-sm text-blue-grey-8 category-project">
                {{ item.category.join(", ") }}
              </div>
              <RouterLink
                class="text-dark no-decoration"
                :to="`/project/${item.id}`"
              >
                <div
                  class="text-h4 title-project cursor-pointer ellipsis-2-lines"
                >
                  {{ item.name }}
                </div>
              </RouterLink>
              <div class="q-mt-md">
                <q-btn
                  @click="openProject(item.id)"
                  flat
                  padding="0"
                  color="primary"
                  no-caps
                  icon-right="eva-arrow-forward-outline"
                  label="Ver más"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
