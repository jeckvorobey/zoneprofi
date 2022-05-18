import Vue from "vue";
import router from "./router";
import store from "./store/index";
import Paginate from "vuejs-paginate";

import "@fortawesome/fontawesome-free/js/all.min";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bs-custom-file-input/dist/bs-custom-file-input.min";
import "admin-lte/dist/js/adminlte.min";

// Import top level component
import App from "./App.vue";

Vue.component("Paginate", Paginate);

// Check local storage to handle refreshes
if (localStorage.getItem("avtkey")) {
  (async function () {
    await store.dispatch("user/AUTH_KEY_USER", localStorage.getItem("avtkey"));
    if (store.getters["user/GET_USER"]) {
      await router.push("/");
    }
  })();
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth) && !store.getters["user/GET_USER"]) {
    next({ name: "login" });
  } else {
    next();
  }
});

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
