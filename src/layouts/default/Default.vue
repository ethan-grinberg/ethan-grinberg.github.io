<template>
  <v-app>
    <v-layout >
      <!-- <default-bar /> -->
      <Navigation />
      <default-view />
    </v-layout>
  </v-app>
</template>

<script>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import Navigation from './Navigation.vue'
  export default {
    name: "Default",
    components: {
        DefaultBar,
        DefaultView,
        Navigation
    }
  }
</script>
