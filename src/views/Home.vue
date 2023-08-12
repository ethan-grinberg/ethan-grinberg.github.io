<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-left fill-height">
      <div
        class="d-flex align-center justify-center"
        style="flex-wrap: wrap; gap: 20px;"
      >
        <div>
          <div class="text-h2 font-weight-bold">
            Hi, I'm Ethan.
          </div>
          <div class="text-h5 font-weight-light mt-3">
            {{ store.resume.basics.summary }}
          </div>
          <div
            class="d-flex mt-5"
            style="flex-wrap: wrap; gap: 20px"
          >
            <v-btn 
              width="175px" 
              height="50px" 
              class="rounded-lg" 
              color="primary"
              to="/work"
            >
              Check Out My Work
            </v-btn>
            <v-btn 
              width="175px" 
              height="50px" 
              class="rounded-lg" 
              color="primary"
              :href="store.resume.basics.resume_url"
            >
              Download Resume
            </v-btn>
          </div>
        </div>
        <Vue3Lottie
          :animation-data="monkeyLottie"
          height="350px"
          width="350px"
        />
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
      console.log(this.store.resume.basics.name);
    }
  }
</script>
