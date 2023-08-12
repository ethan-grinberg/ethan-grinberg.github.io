<template>
  <v-container class="">
    <v-responsive class="">
      <v-col
        cols="auto"
        class="my-5"
      >
        <div class="text-h2 text-center">
          About Me
        </div>
        <div class="my-5">
          <div>
            <v-img
              style="border-style: solid; border-radius: 8px;"
              src="@/assets/profile.jpg"
              width="250px"
              height="250px"
            />
          </div>
          <p class="mt-5 text-h6 font-weight-light">
            {{ store.resume.basics.bio }}
          </p>
        </div>
        <v-row class="d-flex align-center mt-10">
          <v-icon 
            icon="mdi-medal" 
            size="large"
          />
          <div class="text-h4 ml-4">
            Highlights
          </div>
        </v-row>
        <v-divider class="my-5" />
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item
            v-for="item in awards"
            :key="item.title"
          >
            <v-sheet
              height="100%"
              rounded
              :color="item.color"
            >
              <v-row
                class="fill-height justify-center align-center"
              >
                <v-card
                  max-width="500px"
                  class="mx-10"
                >
                  <v-card-title
                    class="text-h6 text-wrap"
                    style="word-break: break-word"
                  >
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text
                    class="text-wrap"
                    style="word-break: break-word"
                  >
                    {{ item.description }} 
                  </v-card-text>
                </v-card>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-container class="mt-15">
          <v-row>
            <v-col>
              <v-row class="d-flex align-center">
                <v-icon 
                  icon="mdi-school" 
                  size="large"
                />
                <div class="text-h4 ml-4">
                  Education
                </div>
              </v-row>
              <v-divider class="my-5" />  

              <v-container>
                <v-row align="end">
                  <v-col
                    v-for="item in store.resume.education"
                    :key="item.title"
                    cols="12"
                  >
                    <v-card
                      class="elevation-2"
                      max-width="500px"
                    >
                      <v-card-title
                        class="text-h6 text-wrap"
                        style="word-break: break-word"
                      >
                        {{ item.title }}
                      </v-card-title>
                      <v-card-text
                        class="text-wrap"
                        style="word-break: break-word"
                      >
                        {{ item.description }} 
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-row class="d-flex align-center">
                <v-icon 
                  icon="mdi-bookshelf" 
                  size="large"
                />
                <div class="text-h4 ml-4">
                  Publications
                </div>
              </v-row>
              <v-divider class="my-5" />
              <v-container>
                <v-row align="end">
                  <v-col
                    v-for="item in store.resume.publications"
                    :key="item.title"
                    cols="12"
                  >
                    <v-card
                      class="elevation-2"
                      max-width="500px"
                    >
                      <v-card-title
                        class="text-h6 text-wrap"
                        style="word-break: break-word"
                      >
                        {{ item.title }}
                      </v-card-title>
                      <v-card-text
                        class="text-wrap"
                        style="word-break: break-word"
                      >
                        {{ item.description }} 
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>      
      </v-col>
    </v-responsive>
  </v-container> 
</template>
  
<script>
import {useAppStore} from '@/store/app';

export default {
    name: "AboutView",
    components: {
    
    },
    setup() {
        const store = useAppStore();
        return {
            store
        };
    },
    data() {
      return {
        colors: ['#9B59B6', '#d45fc0', '#FF4081', '#3498DB', '#8E44AD', '#FF9800'],
        awards: []
      }
    },

    created() {
        let awards = this.store.resume.awards;

        let currColorIdx = 0;
        for (let award of awards) {
          if (currColorIdx >= this.colors.length) {
            currColorIdx = 0
          }
          const color = this.colors[currColorIdx];
          award['color'] = color
          currColorIdx += 1;
        }
        this.awards = awards;
    }
};
</script>
  