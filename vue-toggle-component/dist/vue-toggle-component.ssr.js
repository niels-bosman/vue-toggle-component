'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
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
  data: function data() {
    return {
      toggleState: this.toggled
    };
  },
  methods: {
    toggle: function toggle() {
      if (this.disabled) return;
      this.toggleState = !this.toggleState;
    }
  }
};var _withId = /*#__PURE__*/vue.withScopeId("data-v-84279cda");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("section", {
    class: [{
      'dark': $props.darkTheme,
      'disabled': $props.disabled
    }, "wrapper"],
    title: $props.title
  }, [vue.withDirectives(vue.createVNode("input", {
    id: "_".concat($props.name),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.toggleState = $event;
    }),
    disabled: $props.disabled,
    name: $props.name,
    class: "toggle",
    type: "checkbox"
  }, null, 8, ["id", "disabled", "name"]), [[vue.vModelCheckbox, $data.toggleState]]), vue.createVNode("label", {
    for: $props.name,
    style: [$data.toggleState && {
      'background': $props.activeColor
    }],
    class: "toggler",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.toggle && $options.toggle.apply($options, arguments);
    })
  }, null, 12, ["for"]), vue.createVNode("span", {
    class: "title",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.toggle && $options.toggle.apply($options, arguments);
    })
  }, vue.toDisplayString($props.title), 1)], 10, ["title"]);
});function styleInject(css, ref) {
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
}var css_248z = "\n.wrapper[data-v-84279cda] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 5px;\n}\n.wrapper > *[data-v-84279cda] {\n  cursor: pointer;\n  margin: 0 5px;\n}\n.title[data-v-84279cda] {\n  display: inline-block;\n  font-weight: 700;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.title[data-v-84279cda]::selection {\n  background: none;\n}\n.disabled .title[data-v-84279cda]:hover {\n  cursor: not-allowed;\n}\n.dark .title[data-v-84279cda] {\n  color: white;\n}\n.toggle[data-v-84279cda] {\n  display: none;\n}\n.toggle[data-v-84279cda]:after, .toggle + .toggler[data-v-84279cda] {\n  box-sizing: border-box;\n}\n.toggle[data-v-84279cda]:after::selection, .toggle + .toggler[data-v-84279cda]::selection {\n  background: none;\n}\n.toggle + .toggler[data-v-84279cda] {\n  background: #f0f0f0;\n  border-radius: 2em;\n  display: block;\n  height: 2em;\n  outline: 0;\n  padding: 2px;\n  position: relative;\n  transition: background 0.4s ease;\n  user-select: none;\n  width: 4em;\n  will-change: background;\n}\n.toggle + .toggler[data-v-84279cda]:after {\n  background: white;\n  border-radius: 50%;\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  position: relative;\n  transition: left 0.2s ease;\n  width: 50%;\n  will-change: left;\n}\n.disabled .toggle + .toggler[data-v-84279cda] {\n  opacity: 50%;\n}\n.disabled .toggle + .toggler[data-v-84279cda]:hover {\n  cursor: not-allowed;\n}\n.dark .toggle + .toggler[data-v-84279cda] {\n  background: #374151;\n}\n.toggle:checked + .toggler[data-v-84279cda]:after {\n  left: 50%;\n}\n\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-84279cda";// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('VueToggleComponent', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;