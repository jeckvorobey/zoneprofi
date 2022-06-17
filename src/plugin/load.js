export default {
  install(Vue) {
    Vue.prototype.$load = async function (action, errHandler) {
      try {
        await action();
      } catch (e) {
        if (errHandler) {
          errHandler();
        } else {
          console.log(e.response.data);
        }
      }
    };
  },
};
