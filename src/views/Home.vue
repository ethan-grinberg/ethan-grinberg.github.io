<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-left fill-height">
      <div
        class="d-flex align-center justify-center"
        style="flex-wrap: wrap; gap: 20px;"
      >
        <div>
          <transition
            name="fade"
            appear
          >
            <div
              key="my-name"
              class="text-h2 font-weight-bold"
            >
              Hi, I'm
              <router-link to="/about">
                <a
                  class="name"
                >
                  Ethan.
                </a>
              </router-link>
            </div>
          </transition>
          <transition
            name="fade-late"
            appear
          >
            <div
              key="my-bio"
              class="text-h5 font-weight-light mt-3"
            >
              {{ store.resume.bio.summary }}
            </div>
          </transition>
          <div
            class="d-flex mt-5"
            style="flex-wrap: wrap; gap: 20px"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-btn 
                v-bind="props" 
                width="175px" 
                height="50px" 
                class="rounded-lg"
                :color="isHovering ? 'info': 'primary'"
                to="/work"
              >
                Check Out My Work
              </v-btn>
            </v-hover>
            <v-hover v-slot="{isHovering, props}">
              <v-btn 
                v-bind="props" 
                width="175px" 
                height="50px" 
                class="rounded-lg" 
                :color="isHovering ? 'info': 'primary'"
                :href="store.resume.bio.resume_url"
              >
                Download Resume
              </v-btn>
            </v-hover>
          </div>
        </div>
        <transition
          name="fade"
          appear
        >
          <Vue3Lottie
            :animation-data="monkeyLottie"
            height="350px"
            width="350px"
          />
        </transition>
      </div>
    </v-responsive>
  </v-container>
</template>

<script>
  import {useAppStore} from '@/store/app'
  import { Vue3Lottie } from 'vue3-lottie'
  import meditatingMonkey from '@/assets/meditating-monkey.json';

  export default {
    name: "HomeView",
    components: {
      Vue3Lottie
    },
    setup() {
      const store = useAppStore();
      return {
        store
      }
    },
    data() {
      return {
        monkeyLottie: meditatingMonkey
      }

    },
    created() {
    }
  }
</script>

<style scoped>

.name:hover {
  color: #3498DB;
  text-decoration-color: #3498DB;
  transition: 0.2s;
}

.name {
  color: white; 
  text-decoration: underline; 
  text-decoration-color: #9B59B6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-late-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
  transition-delay: 0.5s;
}

.fade-late-enter-from,
.fade-late-leave-to {
  opacity: 0;
}
</style>
