import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      console.log('increment');
      state.value += 1;
    },
    decrement: state => {
      console.log('decrement');
      state.value -= 1;
    },

    /**
     * ANCHOR - PayloadAction 유형을 사용하여 `action.payload`의 내용을 선언한다고 하는데...
     * 없어도 작동은 하는데 ...
     * 사용법 및 사용이유 더 찾아봐야겠음
     *
     */
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      console.log('action', action);
      state.value += action.payload;
    },
  },
});

//*ANCHOR - 액션 크리에이터는 케이스 리듀서 함수별로 생성됨.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
