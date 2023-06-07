import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterReducer';
import persistedReducer from './userSession/userSessionReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: persistedReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // RTK 기본 미들웨어에 커스텀마이징 옵션. 특정 작업을 직렬화 가능성 검사에서 제외
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// persist store 생성
const persistor = persistStore(store);

//*ANCHOR - 스토어 자체에서 `RootState` 및 `AppDispatch` 유형을 추론.
export type RootState = ReturnType<typeof store.getState>;
//*ANCHOR - 추론 유형: {counter}
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
