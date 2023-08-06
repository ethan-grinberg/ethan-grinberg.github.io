<template>
    <v-container>
        <v-responsive>
                <v-col cols="auto">
                    <div class="text-h2 text-center">
                        My Work
                    </div>
                    <v-select 
                        class="my-6"
                        v-model="selectedSkills"
                        :items="skills"
                        chips
                        label="Skills"
                        multiple
                        clearable
                        hint="Filter My Work by Skills"
                        persistent-hint
                        color="primary"
                        item-color="primary"
                    ></v-select>
                    <div class="text-h4 my-5">
                        Projects
                    </div>

                        <v-container
                        >
                            <v-row
                                align="start"
                            >
                                <v-col
                                    cols="auto"
                                    v-for="project in store.resume.projects"
                                >
                                    <v-card max-width="344">
                                        <img :src="getImg(project.images[0])" class="card-img">
                                        <v-card-title>
                                            {{ project.name }}
                                        </v-card-title>

                                        <v-card-subtitle>
                                            {{ project.type }}
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-btn
                                                color="primary"
                                                variant="text"
                                            >
                                                Explore
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    <div class="text-h4 my-5">
                        Work Experience
                    </div>
                    <div class="text-h4 my-5">
                        Courses
                    </div>
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

    data() {
        return {
            skills: ['test', 'test2', 'test3'],
            selectedSkills: []
        }

    },
    setup() {
        const store = useAppStore();
        return {
            store
        }
    },

    created() {
        console.log(this.store.resume.basics.name);
    },

    methods: {
        getImg(name) {
            return new URL(`../assets/${name}`, import.meta.url).href;
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
  