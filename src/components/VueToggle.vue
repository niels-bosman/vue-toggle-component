<template>
  <section
    :class="{'dark': darkTheme, disabled}"
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
      :aria-readonly="disabled"
      :aria-labelledby="labelId"
      :style="toggleState && {background: activeColor}"
      class="m-toggle__content"
      role="checkbox"
      @click="toggle"
    />
    <label
      :id="labelId"
      :for="id"
      :style="[{fontSize: `${fontSize}px`, fontWeight}]"
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
    fontSize: { type: Number, default: 16 },
    fontWeight: { type: String, default: 'normal' },
    name: { type: String, required: true },
    title: { type: String, required: true },
    toggled: { type: Boolean, default: false },
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

  computed: {
    id() {
      return this.name.replace(/ /g, '').toLowerCase();
    },
    labelId() {
      return `${this.id}-label`
    },
  },
}
</script>

<style lang="scss" scoped>
.m-toggle {
  $self: &;
  $toggle-spacing: 2px;
  display: flex;
  align-items: center;
  margin: 0 -5px;

  > * {
    cursor: pointer;
    margin: 0 5px;
  }

  &__label {
    user-select: none;

    .disabled & {
      cursor: not-allowed;
    }

    .dark & {
      color: white;
    }
  }

  &__input {
    display: none;

    &:checked {
      & + #{$self}__content {
        &:after {
          left: calc(50% + #{$toggle-spacing});
        }
      }
    }
  }

  &__content {
    box-sizing: border-box;
    background: #F0F0F0;
    border-radius: 2em;
    height: 2em;
    outline: 0;
    padding: $toggle-spacing;
    transition: background .4s ease;
    width: 4em;
    will-change: background;

    &:after {
      background: white;
      border-radius: 50%;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: relative;
      transition: left .2s ease;
      width: calc(50% - #{$toggle-spacing});
      will-change: left;
    }

    .disabled & {
      opacity: 50%;
      cursor: not-allowed;
    }

    .dark & {
      background: #374151;
    }
  }
}
</style>
