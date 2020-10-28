<template>
  <section class="wrapper">
    <span v-if="location === 'left'" class="title">{{ title }}</span>
    <input
        :id="id"
        v-model="toggled"
        :name="name"
        class="toggle"
        type="checkbox"
        @click="toggled = !toggled"
    />
    <label :for="id" class="toggler" />
    <span v-if="location === 'right'" class="title">{{ title }}</span>
  </section>
</template>

<script>
export default {
  name: 'VueToggle',

  props: {
    title:    { type: String, required: true },
    name:     { type: String, default: null },
    id:       { type: Number, required: true },
    location: { type: String, default: 'right' },
  },

  data() {
    return {
      toggled: false,
    }
  },
}
</script>

<style lang="scss" scoped>

$height: 2em;
$background: #F0F0F0;
$succesful-toggle-color: #9FD6AE;

.wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;

  > * {
    margin: 0 5px;
  }
}

.title {
  display: inline-block;
  font-weight: 700;
  line-height: $height;
  vertical-align: middle;
}

.toggle {
  display: none;

  &,
  &:after,
  &:before,
  & *,
  & *:after,
  & *:before,
  & + .toggler {
    box-sizing: border-box;

    &::selection {
      background: none;
    }
  }

  + .toggler {
    background: $background;
    border-radius: 2em;
    cursor: pointer;
    display: block;
    height: 2em;
    outline: 0;
    padding: 2px;
    position: relative;
    transition: background .4s ease;
    user-select: none;
    width: 4em;
    will-change: background;

    &:after {
      background: white;
      border-radius: 50%;
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: relative;
      transition: left .2s ease;
      width: 50%;
      will-change: left;
    }

    &:before {
      display: none;
    }
  }

  &:checked + .toggler {
    background: $succesful-toggle-color;
  }

  &:checked + .toggler:after {
    left: 50%;
  }
}

</style>