import store from "../store/store";

export const canUserAccess = () => {
  try {
    return store.getters.isUserLoggedIn;
  } catch (error) {
    console.log(error.response.data.error);
    return false;
  }
};
