import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {loginApi} from '../../service/api';
import {User} from '../../types/user';

interface AuthState {
  accessToken: string;
  refreshToken: string;
  enableTfa: number;
  needVerified: number;
  needToChangePassword: number;
  user: User | {};
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
  enableTfa: 0,
  needVerified: 0,
  needToChangePassword: 0,
  user: {},
  loading: false,
  error: null,
};

export const onLogin = createAsyncThunk(
  'auth/login',
  async (
    data: {email: string; password: string; captcha: string},
    {rejectWithValue},
  ) => {
    try {
      const response = await loginApi(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(onLogin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(onLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken; // store access token for checking login
        state.user = action.payload.user;
      })
      .addCase(onLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const {logout} = authSlice.actions;

export default authSlice.reducer;
