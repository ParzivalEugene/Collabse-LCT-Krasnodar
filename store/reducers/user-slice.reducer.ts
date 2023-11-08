import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserModel {
  username: string;
  role: string;

}

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
      state.token = token;
    },
    setIsAuth: (state) => {
      const isAuth = true;
      state.isAuth = isAuth;
    },
    // setUser: (state, action: PayloadAction<UserModel>) => {
    //   state.user = {
    //     role: action.payload.role,
    //     firstName: action.payload.firstName,
    //     lastName: action.payload.lastName,
    //     organizationId: action.payload.organizationId,
    //   };
    // },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("persist:root");
    },
  },
});

export const { setUserToken, logout, setIsAuth } = userSlice.actions;

export const { reducer: userSliceReducer } = userSlice;
