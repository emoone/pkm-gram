import { decrement, increment } from '../../modules/store/counter';
import { useAppDispatch, useAppSelector } from '../../modules/store';

import { useEffect } from 'react';

export function ApiTest() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <section className="contentWp min-h-[70vh]">
      <div className="group1">
        <h1>counterArea</h1>
        <div className="flex flex-col content">
          <button
            type="button"
            onClick={() => {
              dispatch(increment());
            }}>
            Increment
          </button>
          <h1 className="font-bold text-center">{count}</h1>
          <button
            type="button"
            onClick={() => {
              dispatch(decrement());
            }}>
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
}
