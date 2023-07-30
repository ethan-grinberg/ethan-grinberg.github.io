<template>
  <!-- <HelloWorld /> -->
  <v-container class="fill-height">
    <v-responsive class="align-center text-left fill-height">
      <v-col cols="auto">
        <div class="text-h2 font-weight-bold">
          Hi, I'm Ethan.
        </div>
        <div class="text-h5 font-weight-thin">
          {{ store.resume.basics.summary }}
        </div>
        <v-row class="mt-2">
          <v-btn 
            width="175px" 
            height="50px" 
            class="ml-2 my-4 rounded-lg" 
            color="primary"
            to="/work">
            Check Out My Work
          </v-btn>
          <v-btn 
            width='175px' 
            height="50px" 
            class="ml-2 my-4 rounded-lg button-hover" 
            color="primary"
            :href="store.resume.basics.resume_url">
            Download Resume
          </v-btn>
        </v-row>
      </v-col>
    </v-responsive>
  </v-container>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import {useAppStore} from '@/store/app'

  export default {
    name: "HomeView",
    components: {
      HelloWorld
    },
    setup() {
      const store = useAppStore();
      return {
        store
      }
    },
    created() {
      console.log(this.store.resume.basics.name);
    }
  }
</script>
