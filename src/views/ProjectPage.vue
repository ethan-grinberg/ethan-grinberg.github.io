<template>
  <v-container>
    <v-responsive>
      <h2>
        Links
      </h2>
    </v-responsive>
  </v-container>
</template>
  
  <script>
    import {useAppStore} from '@/store/app'
  
    export default {
      name: "ProjectView",
      components: {
      },
      setup() {
        const store = useAppStore();
        return {
          store
        }
      },
      data() {
        return {
          is_work: false
        }
  
      },
      created() {
        const name = this.$route.params.id
        const parts = name.split("-")
        if (parts.length === 2) {
          this.is_work = true;
          this.position = parts[0];
          this.company = parts[1];
          const workObj = this.store.resume.work.filter((work) => (work.position === this.position) && (work.company === this.company));
          this.data = workObj[0];
        } else {
          const projObj = this.store.resume.projects.filter((project) => (project.name === name));
          this.data = projObj[0];
        }
        console.log(this.data);
      }
    }
  </script>
  