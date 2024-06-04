import { create } from "zustand";
import axios from "axios";

const AuthStore = create((set) => ({
  loggedin: null,
  loginForm: {
    email: "",
    password: "",
  },
  user: {
    email: "",
    password: "",
  },
  signupForm: {
    email: "",
    password: "",
  },
  updateLoginForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  updateSignupForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },

  login: async () => {
    const { loginForm } = AuthStore.getState();
    const res = await axios.post("/login", loginForm, {
      withCredentials: true,
    });
    console.log("Login AuthStore=>", res.data);
    console.log("Login AuthStore=>", res.data.user.email);

    set({
      loggedin: true,
      user: {
        email: res.data.user.email,
        password: res.data.user.password,
        id: res.data.user._id,
      },
    });
  },
  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedin: true });
    } catch (error) {
      set({ loggedin: false });
    }
  },
  signup: async () => {
    const { signupForm } = AuthStore.getState();
    const res = await axios.post("/signup", signupForm, {
      withCredentials: true,
    });
    set({
      signupForm: {
        email: "",
        password: "",
      },
    });
    console.log(res);
  },
  logout: async () => {
    await axios.get("/logout");
    set({ loggedin: false });
  },
}));

export default AuthStore;
