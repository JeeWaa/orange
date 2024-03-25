import {createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../axios-orders.jsx";

export const getCustomerList = createAsyncThunk('/todos', async (page, {rejectWithValue}) => {
    try {
        const {data} = await instance.get('/todos');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
