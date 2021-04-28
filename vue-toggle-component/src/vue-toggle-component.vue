<template>
  <section
    :class="{'dark': darkTheme, 'disabled': disabled}"
    :title="title"
    class="wrapper"
  >
    <input
      :id="`_${name}`"
      v-model="toggleState"
      :aria-checked="toggleState"
      :aria-readonly="!toggleState"
      :disabled="disabled"
      :name="name"
      class="toggle"
      role="checkbox"
      type="checkbox"
    />
    <label
      :for="name"
      :style="[toggleState && {background: activeColor}]"
      class="toggler"
      @click="toggle"
    />
    <span
      class="title"
      @click="toggle"
      :style="[{fontSize, fontWeight}]"
    >
      {{title}}
    </span>
  </section>
</template>

<script>
export default {
  name: 'VueToggle',

  props: {
    activeColor: {type: String, default: '#9FD6AE'},
    darkTheme:   {type: Boolean, default: false},
    disabled:    {type: Boolean, default: false },
    fontSize:    {type: Number, default: 16},
    fontWeight:  {type: String, default: 'bold'},
    name:        {type: String, required: true},
    title:       {type: String, required: true},
    toggled:     {type: Boolean, default: false},
  },

  data() {
    return {
      toggleState: this.toggled
    }
  },

  methods: {
    toggle() {
      if (this.disabled) return;
      this.toggleState = !this.toggleState
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
.wrapper > * {
  cursor: pointer;
  margin: 0 5px;
}
.title {
  display: inline-block;
  line-height: 2em;
  vertical-align: middle;
}
.title::selection {
  background: none;
}
.disabled .title:hover {
  cursor: not-allowed;
}
.dark .title {
  color: white;
}
.toggle {
  display: none;
}
.toggle:after, .toggle + .toggler {
  box-sizing: border-box;
}
.toggle:after::selection, .toggle + .toggler::selection {
  background: none;
}
.toggle + .toggler {
  background: #f0f0f0;
  border-radius: 2em;
  display: block;
  height: 2em;
  outline: 0;
  padding: 2px;
  position: relative;
  transition: background 0.4s ease;
  user-select: none;
  width: 4em;
  will-change: background;
}
.toggle + .toggler:after {
  background: white;
  border-radius: 50%;
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: relative;
  transition: left 0.2s ease;
  width: 50%;
  will-change: left;
}
.disabled .toggle + .toggler {
  opacity: 50%;
}
.disabled .toggle + .toggler:hover {
  cursor: not-allowed;
}
.dark .toggle + .toggler {
  background: #374151;
}
.toggle:checked + .toggler:after {
  left: 50%;
}

</style>
