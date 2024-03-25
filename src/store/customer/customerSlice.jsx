import {createSlice} from "@reduxjs/toolkit";
import {getCustomerList} from "../../service/customer/customer.jsx";

const initialState = {
    customer : {
        data: [],
        isLoading: false,
        isSuccess: false,
        errorMessage: ''
    }
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    extraReducers: {
        [getCustomerList.pending]: (state) => {
            state.customer.isLoading = true;
        },
        [getCustomerList.fulfilled]: (state, { payload }) => {
            state.customer.isLoading = false;
            state.customer.isSuccess = true;
            state.customer.data = payload;
        },
        [getCustomerList.rejected]: (state, { payload }) => {
            state.customer.isLoading = false;
            state.customer.isSuccess = false;
            state.customer.errorMessage = payload;
        }
    }
})

export default customerSlice.reducer;