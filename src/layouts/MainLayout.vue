<template>
  <q-layout view="hHr lpR fff">
    <q-header reveal elevated class="bg-white text-dark" height-hint="98">
      <q-toolbar class="container">
        <q-toolbar-title>
          <q-icon
            @click="goToHome()"
            class="cursor-pointer icon-logo-nav"
            name="img:logos/logo_dark.svg"
          />
        </q-toolbar-title>
        <q-tabs
          class="gt-xs text-weight-medium text-dark"
          align="right"
          no-caps
          indicator-color="transparent"
          active-color="pink"
        >
          <q-route-tab
            :ripple="false"
            exact
            :to="{ path: '/', hash: '#inicio' }"
            label="Inicio"
          />
          <q-route-tab
            :ripple="false"
            exact
            :to="{ path: '/', hash: '#acerca' }"
            label="Acerca de mí"
          />
          <q-route-tab
            :ripple="false"
            exact
            :to="{ path: '/', hash: '#portafolio' }"
            label="Portafolio"
          />
          <q-route-tab
            :ripple="false"
            exact
            :to="{ path: '/', hash: '#habilidades' }"
            label="Habilidades"
          />
        </q-tabs>
        <q-btn
          class="gt-xs q-ml-lg"
          outline
          color="primary"
          label="Contáctame"
          no-caps
          :href="linkWhatsapp"
          target="_blank"
        />
        <q-btn
          @click="drawer = !drawer"
          aria-label="menu"
          class="lt-sm"
          dense
          flat
          round
          icon="menu"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      side="right"
      show-if-above
      :width="200"
      :breakpoint="500"
      behavior="mobile"
      bordered
      class="bg-light"
    >
      <q-scroll-area class="fit">
        <div class="flex col-12 justify-center items-center">
          <q-icon
            @click="goToHome()"
            class="cursor-pointer"
            size="120px"
            name="img:logos/logo_dark.svg"
          />
        </div>
        <q-separator />
        <q-list class="q-mt-md text-center">
          <q-item
            :active="link === 'inicio'"
            @click="link = 'inicio'"
            :to="{ path: '/', hash: '#inicio' }"
            clickable
            v-ripple
          >
            <q-item-section> Inicio</q-item-section>
          </q-item>
          <q-item
            :active="link === 'acerca'"
            @click="link = 'acerca'"
            exact
            :to="{ path: '/', hash: '#acerca' }"
            clickable
            v-ripple
          >
            <q-item-section> Acerca de mí</q-item-section>
          </q-item>
          <q-item
            :active="link === 'portafolio'"
            @click="link = 'portafolio'"
            exact
            :to="{ path: '/', hash: '#portafolio' }"
            clickable
            v-ripple
          >
            <q-item-section> Portafolio</q-item-section>
          </q-item>
          <q-item
            :active="link === 'habilidades'"
            @click="link = 'habilidades'"
            exact
            :to="{ path: '/', hash: '#habilidades' }"
            clickable
            v-ripple
          >
            <q-item-section> Habilidades</q-item-section>
          </q-item>
        </q-list>
        <div class="q-pa-md text-center">
          <q-btn
            class=""
            :href="linkWhatsapp"
            target="_blank"
            outline
            color="primary"
            label="Contáctame"
            no-caps
          />
        </div>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
          :duration="200"
        >
          <component :is="Component" />
          <!-- place QPageScroller at end of page -->
        </transition>
      </router-view>
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn
          aria-label="Ir arriba"
          fab
          icon="keyboard_arrow_up"
          color="primary"
        />
      </q-page-scroller>
    </q-page-container>

    <q-footer bordered class="bg-dark text-white q-px-md q-py-lg">
      <div class="flex items-center justify-center col-12 column q-mb-xl">
        <q-icon
          @click="goToHome()"
          class="q-mb-lg icon-logo-footer"
          name="img:logos/logo_light.svg"
        />
        <div class="text-center text-subtitle1 q-mb-sm">
          Si estas interesado en trabajar conmigo o tienes alguna propuesta de
          proyecto, puedes contactarme aquí.
        </div>
        <div class="flex items-center justify-center q-gutter-md">
          <q-btn
            round
            padding="0"
            size="lg"
            :href="linkWhatsapp"
            target="_blank"
            flat
            color="white"
            icon="whatsapp"
            aria-label="WhatsApp"
          />
          <q-btn
            round
            padding="0"
            size="lg"
            :href="linkLinkedin"
            target="_blank"
            flat
            color="white"
            icon="eva-linkedin"
            aria-label="Linkedin"
          />
          <q-btn
            round
            padding="0"
            size="lg"
            :href="linkGithub"
            target="_blank"
            flat
            color="white"
            icon="eva-github"
            aria-label="Github"
          />
        </div>
      </div>
      <div class="flex items-center col-12 text-body1 justify-around">
        <div class="col-12">
          <div class="text-center">
            Hecho con <q-icon color="pink" name="eva-heart" /> por
            <span class="text-weight-medium">Mariam Rosal</span>
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    return {
      drawer: ref(false),
      link: ref("inicio"),
      linkWhatsapp: ref(
        "https://api.whatsapp.com/send?phone=584149955511&text=Hola%2C%20revis%C3%A9%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo%20%F0%9F%91%8B"
      ),
      linkLinkedin: ref("https://www.linkedin.com/in/mariam-rosal"),
      linkGithub: ref("https://github.com/majoh99"),
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
});
</script>
<style>
a.q-tab:hover .q-focus-helper {
  background-color: #fff;
}
</style>
