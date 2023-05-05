import { shallowMount } from "@vue/test-utils";
import LoginPage from "@/views/LoginPage.vue";
import {createStore} from "vuex";
import { useRouter, useRoute } from "vue-router";

jest.mock("vue-router", () => ({
  useRoute: jest.fn(),
  useRouter: jest.fn(() => ({
    push: () => {}
  }))
}));

describe("LoginPage", () => {
  let wrapper;
  const loginError = null;
  const userData = { id: 1234, username: "test@test.com" };
  let mockedFn;
  let store;

  beforeEach(() => {
    mockedFn = jest.fn();
    store = createStore({
      state: {userData, loginError},
      getters: {
        userData: mockedFn,
        loginError: mockedFn
      },
      actions: {
        resetError: mockedFn,
        login: mockedFn
      }
    });
    wrapper = shallowMount(LoginPage, {
      global: {
        plugins: [store]
      }
    });
  });

  describe("inputUserName", () => {
    it("should call resetError", () => {
      const value = "test";
      wrapper.vm.resetError = mockedFn;

      wrapper.vm.inputUserName(value);
  
      expect(wrapper.vm.user.username).toBe(value);
      expect(wrapper.vm.resetError).toHaveBeenCalled();
    });
  });

  describe("inputUserPassword", () => {
    it("should call resetError", () => {
      const value = "1234456677";
      wrapper.vm.resetError = mockedFn;

      wrapper.vm.inputUserName(value);
  
      expect(wrapper.vm.user.username).toBe(value);
      expect(wrapper.vm.resetError).toHaveBeenCalled();
    });
  });

  describe("showPopup", () => {
    it("should set popup visible", () => {
      wrapper.vm.isPopupVisible = false;

      wrapper.vm.showPopup();

      expect(wrapper.vm.isPopupVisible).toBe(true);
    });
  });
  describe("closePopup", () => {
    it("should set popup not visible", () => {
      wrapper.vm.isPopupVisible = true;

      wrapper.vm.closePopup();

      expect(wrapper.vm.isPopupVisible).toBe(false);
    });
  });

  describe("loginUser", () => {
    it ("should login user", () => {
      wrapper.vm.user = {username: "test", password: "test1234"};
      wrapper.vm.login = mockedFn;

      wrapper.vm.loginUser();

      expect(wrapper.vm.login).toHaveBeenCalled();
    });
    it ("should cancel login if either username or password are wrong", () => {
      wrapper.vm.user = {username: "", password: ""};
      wrapper.vm.login = mockedFn;
      
      wrapper.vm.login.mockReset();
      wrapper.vm.loginUser();

      expect(wrapper.vm.login).toHaveBeenCalledTimes(0);
    });
  });
});
