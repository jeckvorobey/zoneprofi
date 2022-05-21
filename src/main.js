import Vue from "vue";
import router from "./router";
import store from "./store/index";
import Paginate from "vuejs-paginate";
import VueJSModal from "vue-js-modal";

import "@fortawesome/fontawesome-free/js/all.min";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bs-custom-file-input/dist/bs-custom-file-input.min";
import "admin-lte/dist/js/adminlte.min";

// Import top level component
import App from "./App.vue";
Vue.use(VueJSModal, {
  dialog: true,
  dynamicDefaults: { adaptive: true, resizable: true },
});

Vue.component("Paginate", Paginate);

// Check local storage to handle refreshes
if (localStorage.getItem("avtkey")) {
  // eslint-disable-next-line no-useless-catch
  try {
    (async function () {
      await store.dispatch("user/authKeyUser", localStorage.getItem("avtkey"));
      if (store.getters["user/GET_USER"]) {
        await router.push("/");
      }
    })();
  } catch (e) {
    throw e;
  }
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth) && Object.keys(store.getters["user/GET_USER"]).length === 0) {
    next({ name: "login" });
  } else {
    next();
  }
});

// Start out app!
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
