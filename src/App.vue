<template>
  <v-app>
  <v-navigation-drawer app>
    <side-bar />
  </v-navigation-drawer>
  <v-main>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import SideBar from '@/components/SideBar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    SideBar
  }
})
</script>
