import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {
        name: 'Oscar Anillo',
        number: '0000 0000 0000 0000',
        month: '00',
        year: '00',
        cvv: '123'
    }
}

const formSlice =  createSlice({
    name: 'form_slice',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = {
                ...state.userInfo,
                [action.payload.target.name]: action.payload.target.value
            }
        }
    }
})

export const { setUserInfo }= formSlice.actions;
export default formSlice.reducer;