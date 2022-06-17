export default function (instance) {
  return {
    signIn(payload) {
      return instance.post(process.env.VUE_APP_APIKEY + "/avt/avt", payload);
    },
    authKey(payload) {
      console.log(`payload ${payload}`);
      return instance.post(process.env.VUE_APP_APIKEY + "/avt/avtkey", payload);
    },
  };
}
