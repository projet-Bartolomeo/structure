<template>
<main>
  <button @click="open=!open">Nouveau message</button>
  <popup v-if="open">
    <hello-world />
    <button @click="open=!open" class="popup-close">
      close
    </button>
  </popup>
</main>
</template>

<script lang="ts">
import Popup from '@/components/Popup.vue'
import Vue from 'vue'
import HelloWorld from '../components/SendMessage.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    HelloWorld,
    Popup
  },
  data () {
    return {
      open: false
    }
  }
})
</script>

<style>

</style>
