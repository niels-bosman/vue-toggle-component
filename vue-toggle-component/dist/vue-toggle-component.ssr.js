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
  data: function data() {
    return {
      toggleState: this.toggled
    };
  },
  methods: {
    toggle: function toggle() {
      if (this.disabled) return;
      this.toggleState = !this.toggleState;
      this.$emit('toggle', this.toggleState);
    }
  },
  computed: {
    id: function id() {
      return this.name.replace(/ /g, '').toLowerCase();
    }
  }
};var _withId = /*#__PURE__*/vue.withScopeId("data-v-5330e797");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("section", {
    class: [{
      'm-toggle--is-dark': $props.darkTheme,
      'm-toggle--is-disabled': $props.disabled
    }, "m-toggle"]
  }, [vue.withDirectives(vue.createVNode("input", {
    id: $options.id,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.toggleState = $event;
    }),
    disabled: $props.disabled,
    name: $props.name,
    class: "m-toggle__input",
    type: "checkbox"
  }, null, 8, ["id", "disabled", "name"]), [[vue.vModelCheckbox, $data.toggleState]]), vue.createVNode("span", {
    "aria-checked": $data.toggleState,
    "aria-disabled": $props.disabled,
    "aria-labelledby": "".concat($options.id, "-label"),
    "aria-readonly": $props.disabled,
    style: $data.toggleState && {
      'background-color': $props.activeColor
    },
    class: "m-toggle__content",
    role: "checkbox",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.toggle && $options.toggle.apply($options, arguments);
    })
  }, null, 12, ["aria-checked", "aria-disabled", "aria-labelledby", "aria-readonly"]), vue.createVNode("label", {
    id: "".concat($options.id, "-label"),
    for: $options.id,
    style: {
      'font-size': $props.fontSize,
      'font-weight': $props.fontWeight
    },
    class: "m-toggle__label"
  }, vue.toDisplayString($props.title), 13, ["id", "for"])], 2);
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
}var css_248z = "\n.m-toggle[data-v-5330e797] {\n  align-items: center;\n  display: flex;\n  margin: 0 -5px;\n}\n.m-toggle > *[data-v-5330e797] {\n  cursor: pointer;\n  margin: 0 5px;\n}\n.m-toggle__label[data-v-5330e797] {\n  user-select: none;\n}\n.m-toggle--is-disabled .m-toggle__label[data-v-5330e797] {\n  cursor: not-allowed;\n}\n.m-toggle--is-dark .m-toggle__label[data-v-5330e797] {\n  color: white;\n}\n.m-toggle__input[data-v-5330e797] {\n  display: none;\n}\n.m-toggle__input:checked + .m-toggle__content[data-v-5330e797]:after {\n  left: calc(50% + 2px);\n}\n.m-toggle__content[data-v-5330e797] {\n  background: #F0F0F0;\n  border-radius: 2em;\n  box-sizing: border-box;\n  height: 2em;\n  outline: 0;\n  overflow: hidden;\n  padding: 2px;\n  transition: background-color 0.4s ease;\n  width: 4em;\n  will-change: background-color;\n}\n.m-toggle__content[data-v-5330e797]:after {\n  background: white;\n  border-radius: 50%;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);\n  content: '';\n  display: block;\n  height: 100%;\n  left: 0;\n  position: relative;\n  transition: left 0.2s ease;\n  width: calc(50% - 2px);\n  will-change: left;\n}\n.m-toggle--is-disabled .m-toggle__content[data-v-5330e797] {\n  cursor: not-allowed;\n  opacity: 50%;\n}\n.m-toggle--is-dark .m-toggle__content[data-v-5330e797] {\n  background: #374151;\n}\n\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-5330e797";// Import vue component
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