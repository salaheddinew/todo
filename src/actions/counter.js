const incrementCounter = (data) => ({
  type: "DO IT",
  payload: data,
});

const decrementCounter = (data) => ({
  type: "supr",
  payload: data,
});

export default {
  incrementCounter,
  decrementCounter,
};
