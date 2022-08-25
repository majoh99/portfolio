<template>
  <section id="habilidades" class="section bg-white q-py-xl q-px-md">
    <div class="container">
      <div class="col-12 flex justify-center">
        <h2 class="title text-center">Mis habilidades</h2>
      </div>
      <div class="col-12 flex justify-center items-center q-mt-lg">
        <Carousel
          :autoplay="2000"
          class="col"
          :settings="settings"
          wrapAround
          :breakpoints="breakpoints"
        >
          <Slide v-for="skill in skills" :key="skill.id">
            <div class="carousel__item q-px-md">
              <q-icon size="80px" :name="skill.url" />
            </div>
          </Slide>
          <template #addons>
            <Pagination class="q-my-xl" />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "skills",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  setup() {
    return {
      skills: [
        { id: 1, name: "HTML", url: "img:skill/html5.svg" },
        { id: 2, name: "CSS", url: "img:skill/css3.svg" },
        { id: 3, name: "JS", url: "img:skill/js.svg" },
        { id: 4, name: "Vuejs", url: "img:skill/vuejs.svg" },
        { id: 5, name: "Quasar", url: "img:skill/quasar.svg" },
        { id: 6, name: "WordPress", url: "img:skill/wordpress.svg" },
        { id: 7, name: "Figma", url: "img:skill/figma.svg" },
        { id: 8, name: "Git", url: "img:skill/git.svg" },
        { id: 9, name: "NPM", url: "img:skill/npm.svg" },
        { id: 10, name: "Laravel", url: "img:skill/laravel.svg" },
        { id: 11, name: "PHP", url: "img:skill/php.svg" },
        { id: 12, name: "Bootstrap", url: "img:skill/bootstrap.svg" },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 200px and up
        200: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 350px and up
        350: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 700px and up
        700: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "center",
        },
      },
    };
  },
});
</script>

<style></style>
