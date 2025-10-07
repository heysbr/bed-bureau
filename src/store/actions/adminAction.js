import { createAsyncThunk } from "@reduxjs/toolkit";
import DataService from "../service";
import { constant } from "../constant";

const { path } = constant;

// ✅ Admin Login
export const adminLogin = createAsyncThunk(
  "admin/adminLogin",
  async (arg, { rejectWithValue }) => {
    try {
      return await DataService.post(arg, path + "admin/auth/v1/login");
    } catch (error) {
      return rejectWithValue(error?.message || "Login failed");
    }
  }
);

// ✅ Admin Logout
export const adminLogout = createAsyncThunk(
  "admin/adminLogout",
  async (_, { rejectWithValue }) => {
    try {
      return await DataService.get({}, path + "admin/account/v1/logout");
    } catch (error) {
      return rejectWithValue(error?.message || "Logout failed");
    }
  }
);

// ✅ Forgot Password
export const forgotPassword = createAsyncThunk(
  "admin/forgotPassword",
  async (arg, { rejectWithValue }) => {
    try {
      return await DataService.post(
        arg,
        path + "admin/auth/v1/forgot-password"
      );
    } catch (error) {
      return rejectWithValue(error?.message || "Forgot password failed");
    }
  }
);

// ✅ Change Password
export const changePassword = createAsyncThunk(
  "admin/changePassword",
  async (arg, { rejectWithValue }) => {
    try {
      return await DataService.post(
        arg,
        path + "admin/account/v1/change-password"
      );
    } catch (error) {
      return rejectWithValue(error?.message || "Change password failed");
    }
  }
);

// ✅ Reset Password
export const resetPassword = createAsyncThunk(
  "admin/resetPassword",
  async (arg, { rejectWithValue }) => {
    try {
      return await DataService.post(
        arg,
        path + "admin/auth/v1/reset-password"
      );
    } catch (error) {
      return rejectWithValue(error?.message || "Reset password failed");
    }
  }
);

// ✅ Update Profile
export const updateProfile = createAsyncThunk(
  "admin/updateProfile",
  async (arg, { rejectWithValue }) => {
    try {
      return await DataService.post(
        arg,
        path + "admin/account/v1/profile"
      );
    } catch (error) {
      return rejectWithValue(error?.message || "Update profile failed");
    }
  }
);

// ✅ Get Profile
export const getProfile = createAsyncThunk(
  "admin/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      return await DataService.get({}, path + "admin/account/v1/profile");
    } catch (error) {
      return rejectWithValue(error?.message || "Get profile failed");
    }
  }
);
