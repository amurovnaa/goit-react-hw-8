import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../auth/operations";
import toast from "react-hot-toast";

export const end_point = "/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await goitAPI.get(`${end_point}`);
      toast.success("Contacts loaded ✅");
      return response.data;
    } catch (error) {
      toast.error("Failed to load contacts ❌");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post(`${end_point}`, body);
      toast.success(`Contact "${body.name}" added 📝`);
      return response.data;
    } catch (error) {
      toast.error("Failed to add contact ❌");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await goitAPI.delete(`${end_point}/${contactId}`);
      toast.success("Contact deleted 🗑️");
      return contactId;
    } catch (error) {
      toast.error("Failed to delete contact ❌");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
