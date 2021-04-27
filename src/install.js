import VueToggle from "./components/VueToggle";

const VueToggleComponent = {
    install(Vue) {
        const app = Vue.createApp(undefined, undefined);
        app.component("vue-toggle", VueToggle);
    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueToggleComponent);
}

export default VueToggleComponent;
