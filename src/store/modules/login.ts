import type { LoginState, User } from "../../types/Login";
import type { ActionContext } from "vuex";

export default {
  state (): LoginState {
    return {
      user: <User>{},
      isLoginCorrect: true,
      isPasswordCorrect: true
    };
  },
  getters: {
    isLoginCorrect (state: LoginState): boolean {
      return state.isLoginCorrect;
    },
    isPasswordCorrect (state: LoginState): boolean {
      return state.isPasswordCorrect;
    },
    userData (state: LoginState): User {
      return state.user;
    }
  },

  mutations: {
    setLogin (state: LoginState, value: string){
      state.user.login = value;
    },
    setPassword (state: LoginState, value: string){
      state.user.password = value;
    },
    setIsLoginCorrect(state: LoginState, isCorrect: boolean){
      state.isLoginCorrect = isCorrect;
    },
    setIsPasswordCorrect(state: LoginState, isCorrect: boolean){
      state.isPasswordCorrect = isCorrect;
    }
  },

  actions: {
    updateLogin ({ commit }: ActionContext, login: string) {
      commit("setIsLoginCorrect", true);
      commit("setLogin", login);
      const regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
      const isCorrect = regex.test(login);
      commit("setIsLoginCorrect", isCorrect);
    },
    updatePassword ({ commit }: ActionContext, password: string) {
      commit("setIsPasswordCorrect", true)
      commit("setPassword", password);
      const regex = /^(?=.{8,}).+$/;
      const isCorrect = regex.test(password);
      commit("setIsPasswordCorrect", isCorrect);
    }

  }
};
