<template>
  <v-container>
    <v-responsive>
      <div
        class="text-start text-h4 mt-5"
      >
        {{ is_work ? data.position : data.name }}
      </div>
      <div class="d-flex justify-start align-center mt-5">
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-clock"
            class="mr-2"
          />
          <div class="text-h6">
            {{ data.date }}
          </div>
        </div>
        <div class="d-flex align-center ml-5">
          <v-icon
            icon="mdi-pound"
            class="mr-2"
          />
          <div class="text-h6">
            {{ is_work ? data.company : data.type }}
          </div>
        </div>
      </div>
      <v-chip-group column>
        <v-chip
          v-for="skill in data.skills"
          :key="skill"
        >
          {{ skill }}
        </v-chip>
      </v-chip-group>
      <v-divider class="mt-5" />
      <v-container v-if="!is_work">
        <v-row>
          <v-col
            v-for="image in data.images"
            :key="image"
            cols="auto"
          >
            <img
              :src="getImg(image)"
              style="width: 300px; height: 300px; object-fit: cover; border-radius: 8px;"
            >
          </v-col>
        </v-row>
      </v-container>
      <div class="text-h4">
        Contributions
      </div>
      <v-divider />
      <ul>
        <li
          v-for="(item, index) in data.contributions"
          :key="index"
          class="mt-5 text-h6 font-weight-light ml-5"
          style="max-width: 900px;"
        >
          {{ item }}
        </li>
      </ul>
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
      },
      methods: {
        getImg(name) {
            return new URL(`../assets/${name}`, import.meta.url).href;
        }
      }
    }
  </script>
  
<style scoped>
.contributions-list {

}
</style>