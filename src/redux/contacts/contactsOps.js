import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { goitAPI } from "../auth/operations";

axios.defaults.baseURL = "https://681609ee32debfe95dbd393a.mockapi.io";
export const end_point = "/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await goitAPI.get(`${end_point}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post(`${end_point}`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await goitAPI.delete(`${end_point}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
