import store from "@/store/store";

export const canUserAccess = async () => {
  try {
    await store.dispatch("checkToken");
    return store.getters.isUserLoggedIn;
  } catch (error: any) {
    console.log(error.response.data.error);
    return false;
  }
};
