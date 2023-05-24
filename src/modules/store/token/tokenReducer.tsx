import { createSlice } from '@reduxjs/toolkit';
import getBaseData from '../../api/getBaseData';

interface TokenState {
  isLoading: boolean;
  token: string;
}
const initialState: TokenState = {
  isLoading: false,
  token: '',
};
export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    isLoading: (state, action) => {
      if (!state.token) {
        state.isLoading = true;
      }
    },
    getToken: (state, action) => {
      if (!state.isLoading) {
        state.isLoading = true;
        state.token = action.payload;
      }
    },
  },
});

export const { isLoading, getToken } = tokenSlice.actions;

// const fetchToken = () => async dispatch => {
//   dispatch(isLoading());
//   const res = await getBaseData();
//   dispatch(getToken(res.data));
// };
