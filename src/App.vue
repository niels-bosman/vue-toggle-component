<template>
  <div id="app">
    <vue-toggle title="Toggle me" :id="'1'" />
  </div>
</template>

<script>
import VueToggle from "@/components/VueToggle";

export default {
  name:       'App',
  components: { VueToggle },
}
</script>
