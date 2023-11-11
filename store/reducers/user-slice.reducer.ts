import { UserModel } from "@/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserSlice {
  token: string | null;
  isAuth: boolean;
  user: Partial<UserModel> | null;
}

const initState: UserSlice = {
  token: null,
  isAuth: false,
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initState,
  reducers: {
    setUserToken: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      localStorage.setItem("token", token);
      state.token = token;
    },
    setIsAuth: (state) => {
      const isAuth = true;
      state.isAuth = isAuth;
    },
    setUser: (state, action: PayloadAction<UserModel>) => {
      state.user = {
        id: action.payload.id,
        username: action.payload.username,
        role: action.payload.role,
      };
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { setUserToken, logout, setIsAuth, setUser } = userSlice.actions;

export const { reducer: userSliceReducer } = userSlice;
