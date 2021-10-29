<template>
<main>
  <button @click="open=!open">Nouveau message</button>
  <popup v-if="open">
    <div class="d-flex justify-end">
    <button @click="open=!open" class="popup-close">
      <v-icon>mdi-close</v-icon>
    </button>
    </div>
    <hello-world />
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
.popup-close {
  display: flex;
  align-items: end;
}
</style>
