<template>
  <section class="wrapper" :class="{dark: darkTheme}" :title="title">
    <input
        :id="id"
        :name="name"
        v-model="toggleState"
        class="toggle"
        type="checkbox"
        @click="toggleState = !toggleState"
    />
    <label :for="id" class="toggler" :style="[toggleState && {'background': activeColor}]"/>
    <span class="title" v-text="title" @click="toggleState = !toggleState"/>
  </section>
</template>

<script>
export default {
  name: 'VueToggle',

  props: {
    activeColor: {type: String, default: '#9FD6AE'},
    darkTheme: {type: Boolean, default: false},
    id: {type: String, required: true},
    name: {type: [String, Boolean], default: false},
    title: {type: String, required: true},
    toggled: {type: Boolean, default: false},
  },

  data() {
    return {
      toggleState: this.toggled
    }
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

  &::selection {
    background: none;
  }

  .dark & {
    color: white;
  }
}

.toggle {
  display: none;

  &:after,
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

    .dark & {
      background: #374151;
    }
  }

  &:checked {
    & + .toggler {
      &:after {
        left: 50%;
      }
    }
  }
}

</style>
