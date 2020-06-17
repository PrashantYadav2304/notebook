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
