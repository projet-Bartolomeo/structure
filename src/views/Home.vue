<template>
  <side-bar />
</template>

<script lang="ts">
import Vue from 'vue'
import SideBar from '../components/SideBar.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    SideBar
  }
})
</script>
