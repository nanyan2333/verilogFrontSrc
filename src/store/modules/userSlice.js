import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        id: null,
        role: null,
        isLogin: false,
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setUserId: (state, action) => {
            state.id = action.payload;
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        logoutResetInfo: (state, action) => {
            state.role = null;
            state.id = null
            state.isLogin = false;
        }
    }
})

export const { setRole, setUserId, setIsLogin, logoutResetInfo } = userSlice.actions

export default userSlice.reducer