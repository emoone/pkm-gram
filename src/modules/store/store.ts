import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//*ANCHOR - 스토어 자체에서 `RootState` 및 `AppDispatch` 유형을 추론.
export type RootState = ReturnType<typeof store.getState>;
//*ANCHOR - 추론 유형: {게시물: PostsState, 댓글: CommentsState, 사용자: UsersState}
export type AppDispatch = typeof store.dispatch;
