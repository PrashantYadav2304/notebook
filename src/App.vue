<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

       <v-tabs class="mx-auto">
        <v-tab>Home</v-tab>
        <v-tab>Settings</v-tab>
      </v-tabs>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
