import { AppDispatch, RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface UserSessionState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: UserSessionState = {
  accessToken: null,
  refreshToken: null,
};

const USER_ACCESS_TOKEN_KEY = 'u_a_t';
const USER_REFRESH_TOKEN_KEY = 'u_r_t';
export enum TokenType {
  SET_ACCESS = 'SET_ACCESS',
  GET_ACCESS = 'GET_ACCESS',
  REMOVE_ACCESS = 'REMOVE_ACCESS',
  SET_REFRESH = 'SET_REFRESH',
  GET_REFRESH = 'GET_REFRESH',
  REMOVE_REFRESH = 'REMOVE_REFRESH',
}

// action 함수들

export const userSessionSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<TokenType.SET_ACCESS>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<TokenType.SET_REFRESH>) => {
      state.refreshToken = action.payload;
    },
    removeAccessToken: state => {
      state.accessToken = null;
    },
    removeRefreshToken: state => {
      state.refreshToken = null;
    },
  },
});

export const {
  setAccessToken,
  setRefreshToken,
  removeAccessToken,
  removeRefreshToken,
} = userSessionSlice.actions;

// reducer 추출;
const userSessionReducer = userSessionSlice.reducer;

// persist 설정
const authPersistConfig = {
  key: 'auth',
  storage,
  version: 1,
};

// persist된 reducer 생성
const persistedReducer = persistReducer(authPersistConfig, userSessionReducer);

export default persistedReducer;
