import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IUser } from '../../providers/auth/AuthContext';
import { httpLoginUser, httpLogoutUser } from '../../services/LoginService';
import { httpRegisterNewUser } from '../../services/RegisterService';

export interface IAuthState {
  userId: string | null;
  isAdmin: boolean;
  isSignedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  message: string | null;
}

const userId = localStorage.getItem('userId');
const isAdmin = localStorage.getItem('isAdmin') === 'true';

const initialState: IAuthState = {
  userId: userId || null,
  isAdmin: isAdmin,
  isSignedIn: !!userId,
  isLoading: false,
  isError: false,
  message: null,
};

export const signin = createAsyncThunk('auth/signin', async (user: IUser, thunkAPI) => {
  try {
    return await httpLoginUser(user);
  } catch (err) {
    if (err instanceof AxiosError) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const signout = createAsyncThunk('auth/signout', async () => {
  await httpLogoutUser();
});

export const registerNewUser = createAsyncThunk(
  'auth/register',
  async (newUser: IUser, thunkAPI) => {
    try {
      return await httpRegisterNewUser(newUser);
    } catch (err) {
      if (err instanceof AxiosError) {
        const message =
          (err.response && err.response.data && err.response.data.message) ||
          err.message ||
          err.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetHelperStates: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userId = action.payload?.id || null;
        state.isAdmin = action.payload?.isAdmin || false;
        state.isSignedIn = true;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });

    builder
      .addCase(signout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signout.fulfilled, (state) => {
        state.userId = null;
        state.isAdmin = false;
        state.isSignedIn = false;
        state.isLoading = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(signout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    builder
      .addCase(registerNewUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerNewUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.message = null;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { resetHelperStates } = authSlice.actions;
export default authSlice.reducer;
