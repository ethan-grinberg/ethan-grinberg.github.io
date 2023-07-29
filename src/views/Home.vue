<template>
  <HelloWorld />
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
