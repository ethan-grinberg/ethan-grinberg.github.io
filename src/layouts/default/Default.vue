<template>
  <v-app>
    <default-bar />

    <default-view />
  </v-app>
</template>

<script>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  export default {
    name: "Default",
    components: {
        DefaultBar,
        DefaultView
    }
  }
</script>
