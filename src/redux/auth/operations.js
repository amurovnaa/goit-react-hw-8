import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  goitAPI.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      console.log("Register body:", body);
      const response = await goitAPI.post("/users/signup", body);
      setAuthHeader(response.data.token);
      toast.success("Welcome! You’re registered! 🎉");
      return response.data;
    } catch (error) {
      toast.error("Registration failed!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (body, thunkAPI) => {
    try {
      const response = await goitAPI.post("/users/login", body);
      setAuthHeader(response.data.token);
      toast.success("Login successful! 👋");
      return response.data;
    } catch (error) {
      toast.error("Login failed. ");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await goitAPI.post("/users/logout");
      removeAuthHeader();
      toast.success("You have logged out. See you soon! 👋");
    } catch (error) {
      toast.error("Logout failed. Try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      if (!savedToken) {
        return thunkAPI.rejectWithValue(toast.error("Login to start"));
      }
      setAuthHeader(savedToken);
      const response = await goitAPI.get("users/current");
      return response.data;
    } catch (error) {
      toast.error("Session expired. Please log in again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
