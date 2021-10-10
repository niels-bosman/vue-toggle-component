<template>
  <section
    :class="{
      'm-toggle--is-dark':     darkTheme,
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
      class="m-toggle__content"
      :class="{'m-toggle__content--active': toggleState}"
      role="checkbox"
      @click="toggle"
    />
    <label
      :id="`${id}-label`"
      :for="id"
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
    darkTheme:   { type: Boolean, default: false },
    disabled:    { type: Boolean, default: false },
    fontSize:    { type: String, default: '16px' },
    fontWeight:  { type: String, default: 'normal' },
    name:        { type: String, required: true },
    title:       { type: String, required: true },
    toggled:     { type: Boolean, default: false },
  },

  data() {
    return { toggleState: this.toggled };
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
};
</script>

<style lang="scss" scoped>
.m-toggle {
  $self: &;
  $toggle-spacing: 2px;
  align-items: center;
  display: flex;
  margin: 0 -5px;

  > * {
    cursor: pointer;
    margin: 0 5px;
  }

  &__label {
    user-select: none;
    font-weight: v-bind(fontWeight);
    font-size: v-bind(fontSize);

    #{$self}--is-disabled & {
      cursor: not-allowed;
    }

    #{$self}--is-dark & {
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
    background: #F0F0F0;
    border-radius: 2em;
    box-sizing: border-box;
    height: 2em;
    outline: 0;
    overflow: hidden;
    padding: $toggle-spacing;
    transition: background-color .4s ease;
    width: 4em;
    will-change: background-color;

    &--active {
      background-color: v-bind(activeColor);
    }

    &:after {
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, .05);
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: relative;
      transition: left .2s ease;
      width: calc(50% - #{$toggle-spacing});
      will-change: left;
    }

    #{$self}--is-disabled & {
      cursor: not-allowed;
      opacity: 50%;
    }

    #{$self}--is-dark & {
      background: #374151;
    }
  }
}
</style>
