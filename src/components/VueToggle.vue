<template>
  <section class="wrapper" @click="toggled = !toggled">
    <span v-if="location === 'left'" class="title">{{ title }}</span>
    <input
        :id="id"
        v-model="toggled"
        :name="name ? name : false"
        class="toggle"
        type="checkbox"
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
    name:     { type: String, required: false },
    id:       { type: Number, required: true },
    location: { type: String, default: 'right' },
  },

  data() {
    return { toggled: false }
  },
}
</script>

<style lang="scss" scoped>

.wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;

  > * {
    cursor: pointer;
    margin: 0 5px;
  }
}

.title {
  display: inline-block;
  font-weight: 700;
  line-height: 2em;
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
    background: #F0F0F0;
    border-radius: 2em;
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
    background: #9FD6AE;
  }

  &:checked + .toggler:after {
    left: 50%;
  }
}

</style>