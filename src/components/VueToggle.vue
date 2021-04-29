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
      class="toggler"
    />
    <label
      :for="id"
      :style="[{fontSize, fontWeight}]"
      class="title"
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

<style lang="scss" scoped>

section {
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
  line-height: 2em;
  vertical-align: middle;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &::selection {
    background: none;
  }

  .disabled & {
    &:hover {
      cursor: not-allowed;
    }
  }

  .dark & {
    color: white;
  }
}

input {
  display: none;

  &:after,
  & + .toggler {
    box-sizing: border-box;
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

    .disabled & {
      opacity: 50%;

      &:hover {
        cursor: not-allowed;
      }
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
