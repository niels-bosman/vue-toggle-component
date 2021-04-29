<template>
  <section
      :class="{'dark': darkTheme, disabled}"
      :title="title"
  >
    <input
        :id="id"
        v-model="toggleState"
        :aria-checked="toggleState"
        :aria-readonly="disabled"
        :disabled="disabled"
        :name="name"
        role="checkbox"
        type="checkbox"
    />
    <label
        :for="id"
        :style="toggleState && {background: activeColor}"
        class="toggle__content"
    />
    <label
        :for="id"
        :style="[{fontSize, fontWeight}]"
        class="toggle__label"
    >
      {{title}}
    </label>
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

  computed: {
    id() {
      return `_${this.name.replace(/ /g, '').toLowerCase()}`;
    }
  },
}
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
.wrapper > * {
  cursor: pointer;
  margin: 0 5px;
}
.toggle__label {
  display: inline-block;
  line-height: 2em;
  vertical-align: middle;
}
.toggle__label::selection {
  background: none;
}
.disabled .toggle__label:hover {
  cursor: not-allowed;
}
.dark .toggle__label {
  color: white;
}
input {
  display: none;
}
input:after, .toggle + .toggle__content {
  box-sizing: border-box;
}
input:after::selection, .toggle + .toggle__content::selection {
  background: none;
}
input + .toggle__content {
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
.toggle + .toggle__content:after {
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
.disabled .toggle + .toggle__content {
  opacity: 50%;
}
.disabled .toggle + .toggle__content:hover {
  cursor: not-allowed;
}
.dark .toggle + .toggle__content {
  background: #374151;
}
.toggle:checked + .toggle__content:after {
  left: 50%;
}

</style>
