<template>
   <h2>
    Project Page
   </h2>
</template>
  
  <script>
    import {useAppStore} from '@/store/app'
  
    export default {
      name: "ProjectView",
      components: {
      },
      data() {
        return {
        }
  
      },
      setup() {
        const store = useAppStore();
        return {
          store
        }
      },
      created() {
        const name = this.$route.params.id
        console.log(name);
      }
    }
  </script>
  