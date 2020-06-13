import shell from "./v-shell.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-shell", shell);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

shell.install = install;

export default shell;