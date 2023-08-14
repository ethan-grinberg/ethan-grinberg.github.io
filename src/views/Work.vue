<template>
  <v-container>
    <v-responsive>
      <v-col cols="auto">
        <div class="text-h2 text-center">
          My Work
        </div>
        <v-row
          style="max-width: 600px; margin: 0 auto;"
        >
          <v-autocomplete 
            v-model="selectedSkills"
            auto-select-first
            class="my-6"
            :items="skills"
            chips
            label="Skills"
            multiple
            clearable
            hint="Filter My Work by Skills"
            persistent-hint
            color="primary"
            item-color="primary"
            @update:model-value="updateSelection"
          />
        </v-row>
        <div class="d-flex align-center justify-center">
          <v-icon
            icon="mdi-lightbulb"
            size="large"
            class="mr-2"
          />
          <div class="text-h4 my-5 text-center">
            Projects
          </div>
        </div>

        <v-divider />
        <v-container>
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              v-for="project in currProjects"
              :key="project.name"
              cols="auto"
            >
              <v-card
                max-width="344"
                class="pb-5"
              >
                <v-hover v-slot="{isHovering, props}">
                  <v-btn
                    v-bind="props"
                    icon="mdi-open-in-new"
                    style="position: absolute; top: 2px; right: 2px;"
                    :color="isHovering ? 'info': 'primary'"
                    :to="`project/${project.name}`"
                  />
                </v-hover>
                <img
                  :src="getImg(project.images[0])"
                  class="card-img"
                >
                <v-card-title
                  class="text-wrap"
                  style="word-break: break-word"
                >
                  {{ project.name }}
                </v-card-title>

                <v-card-subtitle>
                  {{ project.type }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <div class="d-flex justify-center align-center">
          <v-icon
            icon="mdi-briefcase"
            class="mr-2"
            size="large"
          />
          <div class="text-h4 my-5 text-center">
            Work Experience
          </div>
        </div>
        <v-divider />
        <v-container>
          <v-row
            v-for="(work, index) in currExperience"
            :key="index"
            justify="center"
          >
            <v-card
              width="600px"
              class="mt-5 "
            >
              <v-hover v-slot="{isHovering, props}">
                <v-btn
                  v-bind="props"
                  icon="mdi-open-in-new"
                  style="position: absolute; top: 2px; right: 2px;"
                  :color="isHovering ? 'info': 'primary'"
                  :to="`/project/${work.type}-${work.name}`"
                />
              </v-hover>

              <v-card-title
                class="text-wrap"
                style="word-break: break-word"
              >
                {{ work.type }}
              </v-card-title>
              <v-card-subtitle
                class="text-wrap"
                style="word-break: break-word"
              >
                {{ work.name }}
              </v-card-subtitle>
              <v-card-text>
                {{ work.date }}
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
        <div class="d-flex justify-center align-center">
          <v-icon 
            class="mr-2"
            icon="mdi-chair-school" 
            size="large"
          />
          <div class="text-h4 my-5">
            Courses
          </div>
        </div>
        <v-divider />
        <v-container>
          <v-row justify="center">
            <v-col
              v-for="course in currCourses"
              :key="course.name"
              cols="auto"
            >
              <v-card>
                <v-card-title
                  class="text-wrap text-center"
                >
                  {{ course.name }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-responsive>
  </v-container>
</template>
  
<script>
import {useAppStore} from '@/store/app'

export default {
    name: "WorkView",
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
            skills: [],
            selectedSkills: [],
            currProjects: this.store.resume.projects,
            currExperience: this.store.resume.experience,
            currCourses: this.store.resume.courses,
            allProjects: this.store.resume.projects,
            allExperience: this.store.resume.experience,
            allCourses: this.store.resume.courses

        }

    },

    created() {
      this.getAllSkills();
    },

    methods: {
        getImg(name) {
            return new URL(`../assets/${name}`, import.meta.url).href;
        },

        updateSelection() {
          if (this.selectedSkills.length === 0) {
            this.currProjects = this.allProjects;
            this.currExperience = this.allExperience;
            this.currCourses = this.allCourses;
          } else {
            this.currProjects = this.allProjects.filter(this.filterBySkills);
            this.currExperience = this.allExperience.filter(this.filterBySkills);
            this.currCourses = this.allCourses.filter(this.filterBySkills);
          }
        },

        getAllSkills() {
          const work = this.store.resume.experience;
          const courses = this.store.resume.courses;
          const projects = this.store.resume.projects;
          const allExperience = [...work, ...courses, ...projects];

          const allSkills = allExperience.reduce((currList, element) => {
              const skills = element.skills;
              for (const skill of skills) {
                currList[skill] = currList[skill] ? currList[skill] + 1 : 1;
              }
              return currList
          }, {})

          let skillsArr = Object.entries(allSkills);
          skillsArr.sort((a, b) => b[1] - a[1]);

          this.skills = skillsArr.map(item => item[0]);
        },

        filterBySkills(element) {
          const skills = element.skills;
          return skills.some(element => this.selectedSkills.includes(element));
        }
    }
}
</script>

<style scoped>
.card-img {
    height: 250px;
    width: 100%;
    object-fit: cover;
}
</style>
  