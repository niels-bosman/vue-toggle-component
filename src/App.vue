<template>
  <VueToggle title="Toggle me" name="VueToggle"/>
</template>

<script>
import VueToggle from "./components/VueToggle";

export default {
  name: 'App',
  components: {
    VueToggle
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}
</style>
