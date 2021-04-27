vue-toggle-component makes an ease to use, lightweight and highly customizable toggle component for [Vue.js](https://vuejs.org/). This component is available in both light and dark mode and it supports Vue 3.

![npm bundle size](https://img.shields.io/bundlephobia/min/vue-toggle-component)
![npm](https://img.shields.io/npm/dt/vue-toggle-component)
![GitHub issues](https://img.shields.io/github/issues/niels-bosman/vue-toggle-component)
![npm](https://img.shields.io/npm/v/vue-toggle-component)
![GitHub Repo stars](https://img.shields.io/github/stars/niels-bosman/vue-toggle-component?style=social)


![Light theme](https://user-images.githubusercontent.com/25898715/116152862-c273f400-a6e6-11eb-8b4d-1017b92d14a5.gif)
![Dark theme](https://user-images.githubusercontent.com/25898715/116152879-c7d13e80-a6e6-11eb-87b3-9b606184ba1e.gif)
## Getting Started

### Installation

#### Installing the package
```sh
# install with yarn
yarn add vue-toggle-component

# install with npm
npm install vue-toggle-component --save
```


### Usage
#### Example
```html
<template>
  <VueToggle title="Toggle me" id="1"/>
</template>

<script>
import VueToggle from "vue-toggle-component";

export default {
  name: 'App',
  components: {
    VueToggle
  }
}
</script>
```

#### Properties that vue-toggle-component uses
| Property name | Description                  |
| ------------- | ---------------------------- |
| `activeColor` | The active color the checked toggler uses. This is a hex code. Default: `#9FD6AE` |
| `darkTheme`   | Give this prop to the component to use the dark mode feature as shown in the GIF above. |
| `id`          | The ID the input and the label use in the component. |
| `name`        | The name attributes that will be set in the input. |
| `title`       | The title that is shown after the toggler itself. |
| `toggled`     | The value the toggler has by default, by default this is `false` |

### Vue version support

The main v1 version supports Vue 3.x only, for previous versions of Vue, check the following the table.

| Vue version | vue-toggle-component version |
| ----------- | ---------------------------- |
| `2.x`       | `0.1.x`                      |
| `3.x`       | `1.x`                        |
### Authors

#### Niels Bosman

www.github.com/niels-bosman

https://nielsbosman.dev

#### Mike van Egmond

www.github.com/mve

https://egmond.dev

### License

MIT
