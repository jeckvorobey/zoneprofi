export default function (instance) {
  return {
    signIn(payload) {
      return instance.post("/avt/avt", payload);
    },
    authKey(payload) {
      console.log(`payload ${payload}`);
      return instance.post("/avt/avtkey", payload);
    },
  };
}
