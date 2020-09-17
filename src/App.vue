<template>
  <v-app class="grey lighten-2">
    <Navbar />
    <v-content class=" mb-5 ml-5">
       <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'
export default {
  
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
