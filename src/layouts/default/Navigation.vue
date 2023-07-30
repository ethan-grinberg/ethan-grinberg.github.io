<template>
    <v-navigation-drawer
        expand-on-hover
        rail
        permanent
    >
        <v-list>
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Ethan Grinberg"
            subtitle="Software Developer"
            to="/"
        ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-information-outline" title="About Me" value="about" to="/about"></v-list-item>
        <v-list-item prepend-icon="mdi-code-tags" title="My Work" value="work" to="/work"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>