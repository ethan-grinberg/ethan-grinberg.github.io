<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-left fill-height">
      <v-row>
        <v-col cols="auto">
          <div class="text-h2 font-weight-bold">
            Hi, I'm Ethan.
          </div>
          <div class="text-h5 font-weight-light mt-4">
            {{ store.resume.basics.summary }}
          </div>
          <v-row class="mt-2">
            <v-btn 
              width="175px" 
              height="50px" 
              class="ml-3 my-4 rounded-lg" 
              color="primary"
              to="/work"
            >
              Check Out My Work
            </v-btn>
            <v-btn 
              width="175px" 
              height="50px" 
              class="ml-2 my-4 rounded-lg" 
              color="primary"
              :href="store.resume.basics.resume_url"
            >
              Download Resume
            </v-btn>
          </v-row>
        </v-col>
        <Vue3Lottie
          :animation-data="monkeyLottie"
          height="350px"
          width="350px"
        />
      </v-row>
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
