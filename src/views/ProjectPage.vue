<template>
  <v-container>
    <v-responsive>
      <div
        class="text-start text-h4 mt-5"
      >
        {{ is_work ? data.type : data.name }}
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
            {{ is_work ? data.name : data.type }}
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
            cols="12"
            lg="3"
            md="3"
            sm="3"
            xl="3"
            xxl="3"
            width="100%"
          >
            <v-img
              :src="getImg(image)"
              aspect-ratio="1"
              cover
              style="border-radius: 5px;"
            />
          </v-col>
        </v-row>
      </v-container>
      
      <div
        class="d-flex mt-5"
        style="flex-wrap: wrap; gap: 20px;"
      >
        <div>
          <div v-if="!(data.links.length === 0)">
            <div class="text-h4">
              Links
            </div>
            <v-divider />
            <v-card
              v-for="(link, index) in data.links"
              :key="index"
              max-width="500px"
              class="mt-2"
            >
              <div class="d-flex">
                <v-hover v-slot="{isHovering, props}">
                  <v-btn
                    v-bind="props"
                    icon="mdi-open-in-new"
                    :color="isHovering ? 'info': 'primary'"
                    size="small"
                    :href="link.url"
                  />
                </v-hover>
                <v-card-title
                  class="text-wrap"
                  style="word-break: break-word"
                >
                  {{ link.text }}
                </v-card-title>
              </div>
            </v-card>
          </div>
        </div>
        <div>
          <div class="text-h4">
            Highlights
          </div>
          <v-divider />
          <ul>
            <li
              v-for="(item, index) in data.contributions"
              :key="index"
              class="mt-5 text-h6 font-weight-light ml-5"
              style="max-width: 700px;"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <v-expansion-panels
        v-if="!(data.description.length === 0)"
        style="max-width: 1100px"
        class="my-5"
      >
        <v-expansion-panel>
          <v-expansion-panel-title class="text-h5">
            Full Description
          </v-expansion-panel-title>
          <v-expansion-panel-text class="text-subtitle-1">
            {{ data.description }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
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
          const workObj = this.store.resume.experience.filter((work) => (work.name === this.company) && (work.type === this.position));
          this.data = workObj[0];
        } else {
          const projObj = this.store.resume.projects.filter((project) => (project.name === name));
          this.data = projObj[0];
        }
      },
      methods: {
        getImg(name) {
            return new URL(`../assets/${name}`, import.meta.url).href;
        },
      }
    }
  </script>
  
<style scoped>
</style>