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
    }

  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-84279cda");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("section", {
    class: [{
      'dark': $props.darkTheme,
      'disabled': $props.disabled
    }, "wrapper"],
    title: $props.title
  }, [withDirectives(createVNode("input", {
    id: `_${$props.name}`,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.toggleState = $event),
    disabled: $props.disabled,
    name: $props.name,
    class: "toggle",
    type: "checkbox"
  }, null, 8, ["id", "disabled", "name"]), [[vModelCheckbox, $data.toggleState]]), createVNode("label", {
    for: $props.name,
    style: [$data.toggleState && {
      'background': $props.activeColor
    }],
    class: "toggler",
    onClick: _cache[2] || (_cache[2] = (...args) => $options.toggle && $options.toggle(...args))
  }, null, 12, ["for"]), createVNode("span", {
    class: "title",
    onClick: _cache[3] || (_cache[3] = (...args) => $options.toggle && $options.toggle(...args))
  }, toDisplayString($props.title), 1)], 10, ["title"]);
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

var css_248z = "\n.wrapper[data-v-84279cda] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px;\n}\n.wrapper > *[data-v-84279cda] {\n  cursor: pointer;\n  margin: 0 5px;\n}\n.title[data-v-84279cda] {\n  display: inline-block;\n  font-weight: 700;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.title[data-v-84279cda]::selection {\n  background: none;\n}\n.disabled .title[data-v-84279cda]:hover {\n  cursor: not-allowed;\n}\n.dark .title[data-v-84279cda] {\n  color: white;\n}\n.toggle[data-v-84279cda] {\n  display: none;\n}\n.toggle[data-v-84279cda]:after, .toggle + .toggler[data-v-84279cda] {\n  box-sizing: border-box;\n}\n.toggle[data-v-84279cda]:after::selection, .toggle + .toggler[data-v-84279cda]::selection {\n  background: none;\n}\n.toggle + .toggler[data-v-84279cda] {\n  background: #f0f0f0;\n  border-radius: 2em;\n  display: block;\n  height: 2em;\n  outline: 0;\n  padding: 2px;\n  position: relative;\n  transition: background 0.4s ease;\n  user-select: none;\n  width: 4em;\n  will-change: background;\n}\n.toggle + .toggler[data-v-84279cda]:after {\n  background: white;\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  position: relative;\n  transition: left 0.2s ease;\n  width: 50%;\n  will-change: left;\n}\n.disabled .toggle + .toggler[data-v-84279cda] {\n  opacity: 50%;\n}\n.disabled .toggle + .toggler[data-v-84279cda]:hover {\n  cursor: not-allowed;\n}\n.dark .toggle + .toggler[data-v-84279cda] {\n  background: #374151;\n}\n.toggle:checked + .toggler[data-v-84279cda]:after {\n  left: 50%;\n}\n\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-84279cda";

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
