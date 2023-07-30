<template>
    <v-navigation-drawer
        expand-on-hover
        rail
        permanent
    >
        <v-list>
        <v-list-item
            prepend-avatar="@/assets/profile.jpg"
            :title="store.resume.basics.name"
            :subtitle="store.resume.basics.label"
            to="/"
            :active="false"
        ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav>
            <v-list-item 
                :active="false" 
                prepend-icon="mdi-information-outline" 
                title="About Me" 
                value="about" 
                to="/about"></v-list-item>
            <v-list-item 
                :active="false" 
                prepend-icon="mdi-code-tags" 
                title="My Work" 
                value="work" 
                to="/work"></v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list>
            <v-list-item
                prepend-icon="mdi-github" 
                title="Github" 
                value="github" 
                :active="false"
                :href="github"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-linkedin" 
                title="Linkedin" 
                value="linkedin" 
                :active="false"
                :href="linkedin"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-mail" 
                title="Email" 
                value="email" 
                :active="false"
                :href="`mailto:${store.resume.basics.email}`"
            ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {useAppStore} from '@/store/app'

export default {
    name: "Navigation",
    setup() {
      const store = useAppStore();
      const profiles = store.resume.basics.profiles;
      const github =  profiles.filter(item => item.network === 'GitHub')[0].url
      const linkedin = profiles.filter(item => item.network ==='LinkedIn')[0].url
      return {
        store,
        github,
        linkedin
      }
    }

}
</script>