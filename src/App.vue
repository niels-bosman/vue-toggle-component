<template>
  <div id="app">
    <vue-toggle title="Toggle me" :id="'1'" />
  </div>
</template>

<script>
import VueToggle from "@vue-toggle-component";

export default {
  name:       'App',
  components: { VueToggle },
}
</script>
