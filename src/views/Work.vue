<template>
    <v-container>
        <v-responsive>
                <v-col cols="auto">
                    <div class="text-h2 text-center">
                        My Work
                    </div>
                    <v-select class="my-6"
                    v-model="selectedSkills"
                    :items="skills"
                    chips
                    label="Skills"
                    multiple
                    clearable
                    hint="Filter My Work by Skills"
                    persistent-hint
                    ></v-select>
                    <div class="text-h4 text-center my-5">
                        Projects
                    </div>
                    <div class="text-h4 text-center my-5">
                        Work Experience
                    </div>
                    <div class="text-h4 text-center my-5">
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
  