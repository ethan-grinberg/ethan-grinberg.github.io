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
                                    v-for="n in 4"
                                    :key="n"
                                >
                                    <v-card max-width="344">
                                        <v-img
                                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                            height="200px"
                                            cover
                                        ></v-img>
                                        <v-card-title>
                                            Top western road trips
                                        </v-card-title>

                                        <v-card-subtitle>
                                            1,000 miles of wonder
                                        </v-card-subtitle>
                                        <v-card-text>
                                        test a;slkdfj;alskfj;alsk jkj;lkj;alk;  ;lkajs d;flkj;a ;alkj ;lkfj;klaj ; ;alksjdf;lksj; lkfj
                                        </v-card-text>
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
    }
}
</script>
  