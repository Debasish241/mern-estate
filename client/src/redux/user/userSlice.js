import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) =>{
            state.loading = true;
        },
        signInSuccess :(state, action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error= null;
        },
        signInFailure: (state, action)=>{
            state.error = action.payload;
            state.loading =false;
        },
        updateUserStart: (state)=>{
            state.loading=true;
        },
        updateUserSuccess: (state, action)=>{
            state.currentUser = action.payload;
            state.loading=false;
            state.error= null;
        },
        updateUserFailure: (state, action)=>{
            state.error = action.payload;
            state.loading= false;
        },
        deleteUserSuccess: (state)=>{
            state.currentUser = null;
            state.loading=false;
            state.error=null;
        },
        deleteUserStart: (state)=>{
            state.loading = true;
        },
        deleteUserFailure: (state,action)=>{
            state.error = action.payload;
            state.loading=false;
        },
        signOutUserSuccess: (state)=>{
            state.currentUser = null;
            state.loading=false;
            state.error=null;
        },
        signOutUserStart: (state)=>{
            state.loading = true;
        },
        signOutUserFailue: (state,action)=>{
            state.error = action.payload;
            state.loading=false;
        }
    }
})

export const {signInStart,signInFailure,signInSuccess,updateUserFailure,updateUserStart,updateUserSuccess,deleteUserFailure,deleteUserSuccess,deleteUserStart,signOutUserFailue,signOutUserStart,signOutUserSuccess}=userSlice.actions;

export default userSlice.reducer;
