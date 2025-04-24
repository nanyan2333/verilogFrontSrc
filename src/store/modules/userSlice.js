import { Logout } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        role: null,
        token: "",
        isLogin: false,
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        // Logout: (state, action) => {
        //     state.role = null;
        //     state.token = "";
        //     state.isLogin = false;
        // }
    }
})

export const { setRole, setToken, setIsLogin } = userSlice.actions

export default userSlice.reducer