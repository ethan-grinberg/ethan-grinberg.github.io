<template>
    <v-container class="">
        <v-responsive class="">
            <v-col cols="auto" class="my-5">
                <div class="text-h2 text-center">
                    About Me
                </div>
                <div class="my-5">
                    <div>
                        <v-img style="border-style: solid; border-radius: 8px;" src="@/assets/profile.jpg" width="250px" height="250px"></v-img>
                    </div>
                    <p class="mt-5 text-h6">
                        {{ store.resume.basics.bio }}
                    </p>
                </div>
                <v-row class="mt-10">
                    <v-icon 
                    icon="mdi-school" 
                    size="large">
                    </v-icon>

                    <div class="text-h4 ml-4">
                        Education
                    </div>
                </v-row>
                <v-divider class="my-5"></v-divider>
                <v-timeline side="end">
                    <v-timeline-item
                        v-for="item in store.resume.education"
                        size="small"
                        class=""
                    >
                        <v-card class="elevation-2" width="700px" color="success">
                            <v-card-title class="text-h6">
                             {{ item.title }}
                            </v-card-title>
                            <v-card-text>
                                {{ item.description }} 
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
                <v-row>
                    <v-icon 
                    icon="mdi-medal" 
                    size="large">
                    </v-icon>

                    <div class="text-h4 ml-4">
                        Awards
                    </div>
                </v-row>
                <v-divider class="my-5"></v-divider>
                <v-timeline side="end">
                    <v-timeline-item
                        v-for="item in store.resume.awards"
                        size="small"
                        class=""
                    >
                        <v-card class="elevation-2" width="700px" color="info">
                            <v-card-title class="text-h6">
                             {{ item.title }}
                            </v-card-title>
                            <v-card-text>
                                {{ item.description }} 
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
                <v-row>
                    <v-icon 
                    icon="mdi-bookshelf" 
                    size="large">
                    </v-icon>

                    <div class="text-h4 ml-4">
                        Publications
                    </div>
                </v-row>
                <v-divider class="my-5"></v-divider>
                <v-timeline side="end">
                    <v-timeline-item
                        v-for="item in store.resume.publications"
                        size="small"
                        class=""
                    >
                        <v-card class="elevation-2" width="700px" color="secondary">
                            <v-card-title class="text-h6">
                             {{ item.title }}
                            </v-card-title>
                            <v-card-text>
                                {{ item.description }} 
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-responsive>
    </v-container> 
</template>
  
<script>
import {useAppStore} from '@/store/app'

export default {
    name: "AboutView",
    components: {
    
    },
    setup() {
        const store = useAppStore();
        return {
            store
        }
    },

    created() {
    }
}
</script>
  