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
    id: {
      type: String,
      required: true
    },
    name: {
      type: [String, Boolean],
      default: false
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
  }

};

const _withId = /*#__PURE__*/withScopeId("data-v-121077f4");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("section", {
    class: ["wrapper", {
      dark: $props.darkTheme
    }],
    title: $props.title
  }, [withDirectives(createVNode("input", {
    id: $props.id,
    name: $props.name,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.toggleState = $event),
    class: "toggle",
    type: "checkbox",
    onClick: _cache[2] || (_cache[2] = $event => $data.toggleState = !$data.toggleState)
  }, null, 8, ["id", "name"]), [[vModelCheckbox, $data.toggleState]]), createVNode("label", {
    for: $props.id,
    class: "toggler",
    style: [$data.toggleState && {
      'background': $props.activeColor
    }]
  }, null, 12, ["for"]), createVNode("span", {
    class: "title",
    textContent: toDisplayString($props.title),
    onClick: _cache[3] || (_cache[3] = $event => $data.toggleState = !$data.toggleState)
  }, null, 8, ["textContent"])], 10, ["title"]);
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

var css_248z = "\n.wrapper[data-v-121077f4] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px;\n}\n.wrapper > *[data-v-121077f4] {\n  cursor: pointer;\n  margin: 0 5px;\n}\n.title[data-v-121077f4] {\n  display: inline-block;\n  font-weight: 700;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.title[data-v-121077f4]::selection {\n  background: none;\n}\n.dark .title[data-v-121077f4] {\n  color: white;\n}\n.toggle[data-v-121077f4] {\n  display: none;\n}\n.toggle[data-v-121077f4]:after, .toggle + .toggler[data-v-121077f4] {\n  box-sizing: border-box;\n}\n.toggle[data-v-121077f4]:after::selection, .toggle + .toggler[data-v-121077f4]::selection {\n  background: none;\n}\n.toggle + .toggler[data-v-121077f4] {\n  background: #f0f0f0;\n  border-radius: 2em;\n  display: block;\n  height: 2em;\n  outline: 0;\n  padding: 2px;\n  position: relative;\n  transition: background 0.4s ease;\n  user-select: none;\n  width: 4em;\n  will-change: background;\n}\n.toggle + .toggler[data-v-121077f4]:after {\n  background: white;\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  position: relative;\n  transition: left 0.2s ease;\n  width: 50%;\n  will-change: left;\n}\n.dark .toggle + .toggler[data-v-121077f4] {\n  background: #374151;\n}\n.toggle:checked + .toggler[data-v-121077f4]:after {\n  left: 50%;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-121077f4";

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
