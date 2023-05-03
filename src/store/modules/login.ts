import type { LoginState, User } from "../../types/Login";
import type { ActionContext } from "vuex";
import { getItem, setItem, removeItem } from "../../helpers/storage";
import { provideApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "../../apllo/apollo";
import { useMutation } from "@vue/apollo-composable";
import { CHECK_TOKEN, LOGIN } from "../../apllo/mutations";
provideApolloClient(apolloClient)


export default {
  state (): LoginState {
    return {
      userData: {} as User,
      loginError: null,
      isUserLoggedIn: false
    };
  },
  getters: {
    userData (state: LoginState) {
      return state.userData;
    },
    loginError (state: LoginState) {
      return state.loginError;
    },
    isUserLoggedIn (state: LoginState) {
      return state.isUserLoggedIn;
    }
  },

  mutations: {
    loginSuccess (state: LoginState, user: User) {
      state.userData = user;
      state.isUserLoggedIn = true;
    },
    loginFailure (state: LoginState, errorMessage: string) {
      state.loginError = errorMessage;
      state.isUserLoggedIn = false;
    },
    resetError (state: LoginState) {
      state.loginError = null;
    },
    toggleLoggedIn (state: LoginState, isLoggedIn: boolean) {
      state.isUserLoggedIn = isLoggedIn;
    }

  },

  actions: {
    async checkToken ({ commit }: ActionContext) {
      const token = getItem("token");
      if (!token) return;

      try {
        const { mutate } = useMutation(CHECK_TOKEN);
        const { data }: any = await mutate({ token });
        const user = data.checkToken;
        commit("loginSuccess", user);
      } catch {
        commit("toggleLoggedIn", false);
        removeItem("token");
      }
    },
    async login ({ commit }: ActionContext, user: User) {
      try {
        const { mutate } = useMutation(LOGIN);
        const { data }: any = await mutate(user);
        setItem("token", data.loginUser.accessToken.token);
        commit("loginSuccess", data.loginUser.user);
      } catch (error: any) {
        commit("loginFailure", error.message)
      }
    },
    resetError({ commit }) {
      commit("resetError")
    }

  }
};
