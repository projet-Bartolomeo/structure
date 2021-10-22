<template>
<main>
  <button @click="open=!open">Nouveau message</button>
  <popup v-if="open">
    <button @click="open=!open" class="popup-close">
      close
    </button>
  </popup>
</main>
</template>

<script lang="ts">
import Popup from '@/components/Popup.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  

  components: {
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
