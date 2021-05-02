import { openBlock, createBlock, withDirectives, createVNode, vModelCheckbox, toDisplayString, withScopeId } from 'vue';

var script = {
  name: 'VueToggle',
  props: {
    activeColor: {
      type: String,
      default: '#9FD6AE'
    },
    darkTheme: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    fontWeight: {
      type: String,
      default: 'normal'
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    toggled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      toggleState: this.toggled
    };
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
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-5330e797");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("section", {
    class: [{
      'm-toggle--is-dark': $props.darkTheme,
      'm-toggle--is-disabled': $props.disabled
    }, "m-toggle"]
  }, [withDirectives(createVNode("input", {
    id: $options.id,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.toggleState = $event),
    disabled: $props.disabled,
    name: $props.name,
    class: "m-toggle__input",
    type: "checkbox"
  }, null, 8, ["id", "disabled", "name"]), [[vModelCheckbox, $data.toggleState]]), createVNode("span", {
    "aria-checked": $data.toggleState,
    "aria-disabled": $props.disabled,
    "aria-labelledby": `${$options.id}-label`,
    "aria-readonly": $props.disabled,
    style: $data.toggleState && {
      'background-color': $props.activeColor
    },
    class: "m-toggle__content",
    role: "checkbox",
    onClick: _cache[2] || (_cache[2] = (...args) => $options.toggle && $options.toggle(...args))
  }, null, 12, ["aria-checked", "aria-disabled", "aria-labelledby", "aria-readonly"]), createVNode("label", {
    id: `${$options.id}-label`,
    for: $options.id,
    style: {
      'font-size': $props.fontSize,
      'font-weight': $props.fontWeight
    },
    class: "m-toggle__label"
  }, toDisplayString($props.title), 13, ["id", "for"])], 2);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.m-toggle[data-v-5330e797] {\n  align-items: center;\n  display: flex;\n  margin: 0 -5px;\n}\n.m-toggle > *[data-v-5330e797] {\n  cursor: pointer;\n  margin: 0 5px;\n}\n.m-toggle__label[data-v-5330e797] {\n  user-select: none;\n}\n.m-toggle--is-disabled .m-toggle__label[data-v-5330e797] {\n  cursor: not-allowed;\n}\n.m-toggle--is-dark .m-toggle__label[data-v-5330e797] {\n  color: white;\n}\n.m-toggle__input[data-v-5330e797] {\n  display: none;\n}\n.m-toggle__input:checked + .m-toggle__content[data-v-5330e797]:after {\n  left: calc(50% + 2px);\n}\n.m-toggle__content[data-v-5330e797] {\n  background: #F0F0F0;\n  border-radius: 2em;\n  box-sizing: border-box;\n  height: 2em;\n  outline: 0;\n  overflow: hidden;\n  padding: 2px;\n  transition: background-color 0.4s ease;\n  width: 4em;\n  will-change: background-color;\n}\n.m-toggle__content[data-v-5330e797]:after {\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);\n  content: '';\n  display: block;\n  height: 100%;\n  left: 0;\n  position: relative;\n  transition: left 0.2s ease;\n  width: calc(50% - 2px);\n  will-change: left;\n}\n.m-toggle--is-disabled .m-toggle__content[data-v-5330e797] {\n  cursor: not-allowed;\n  opacity: 50%;\n}\n.m-toggle--is-dark .m-toggle__content[data-v-5330e797] {\n  background: #374151;\n}\n\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-5330e797";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('VueToggleComponent', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
