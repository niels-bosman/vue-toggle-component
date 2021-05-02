<template>
  <section
    :class="{
      'm-toggle--is-dark': darkTheme,
      'm-toggle--is-disabled': disabled,
    }"
    class="m-toggle"
  >
    <input
      :id="id"
      v-model="toggleState"
      :disabled="disabled"
      :name="name"
      class="m-toggle__input"
      type="checkbox"
    />
    <span
      :aria-checked="toggleState"
      :aria-disabled="disabled"
      :aria-labelledby="`${id}-label`"
      :aria-readonly="disabled"
      :style="toggleState && {
        'background-color': activeColor
      }"
      class="m-toggle__content"
      role="checkbox"
      @click="toggle"
    />
    <label
      :id="`${id}-label`"
      :for="id"
      :style="{
        'font-size': fontSize,
        'font-weight': fontWeight,
      }"
      class="m-toggle__label"
    >
      {{ title }}
    </label>
  </section>
</template>

<script>
export default {
  name: 'VueToggle',

  props: {
    activeColor: { type: String, default: '#9FD6AE' },
    darkTheme: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    fontSize: { type: String, default: '16px' },
    fontWeight: { type: String, default: 'normal' },
    name: { type: String, required: true },
    title: { type: String, required: true },
    toggled: { type: Boolean, default: false },
  },

  data() {
    return { toggleState: this.toggled }
  },

  methods: {
    toggle() {
      if (this.disabled) return;
      this.toggleState = !this.toggleState;
      this.$emit('toggle', this.toggleState);
    }
  },

  computed: {
    id() {
      return this.name.replace(/ /g, '').toLowerCase();
    },
  },
}
</script>

<style scoped>
.m-toggle {
  align-items: center;
  display: flex;
  margin: 0 -5px;
}
.m-toggle > * {
  cursor: pointer;
  margin: 0 5px;
}
.m-toggle__label {
  user-select: none;
}
.m-toggle--is-disabled .m-toggle__label {
  cursor: not-allowed;
}
.m-toggle--is-dark .m-toggle__label {
  color: white;
}
.m-toggle__input {
  display: none;
}
.m-toggle__input:checked + .m-toggle__content:after {
  left: calc(50% + 2px);
}
.m-toggle__content {
  background: #F0F0F0;
  border-radius: 2em;
  box-sizing: border-box;
  height: 2em;
  outline: 0;
  overflow: hidden;
  padding: 2px;
  transition: background-color 0.4s ease;
  width: 4em;
  will-change: background-color;
}
.m-toggle__content:after {
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: relative;
  transition: left 0.2s ease;
  width: calc(50% - 2px);
  will-change: left;
}
.m-toggle--is-disabled .m-toggle__content {
  cursor: not-allowed;
  opacity: 50%;
}
.m-toggle--is-dark .m-toggle__content {
  background: #374151;
}

</style>
