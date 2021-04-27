<script>
import { defineComponent } from 'vue';
import VueToggleComponent from '@/vue-toggle-component.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueToggleComponent
  }
});
</script>

<template>
  <div id="app">
    <vue-toggle-component id="1" title="Toggle me" />
  </div>
</template>
