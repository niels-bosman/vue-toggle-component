import VueToggle from "./components/VueToggle";

export default {
    install(app) {
        app.component("VueToggle", VueToggle);
        app.component("vue-toggle", VueToggle);
    }
};
