import { AppDispatch, RootState } from './store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/**ANCHOR - 일반 `useDispatch` 및 `useSelector` 대신 앱 전체에서 사용
 * hooks 사용이유 Component에서 가져다 쓸 경우
 * import 개수도 줄여주고 Type선언도 생략 할수 있는 장점 있음.
 * Type은 hooks에서 이미 선언한 상태라 추가 선언 필요 없어짐.
 *
 * 사용전
 * import { useSelector, useDispatch } from 'react-redux';
 * import { decrement, increment } from '../../../../modules/store/counter/counterSlice';
 * const count = useSelector((state: RootState) => state.counter.value);
 * const dispatch = useDispatch();
 *
 * 사용후
 * import { useAppDispatch, useAppSelector } from '../../../../modules/store';
 * import { decrement, increment } from '../../../../modules/store/counter/counterSlice';
 * const count = useAppSelector((state) => state.counter.value);
 * const dispatch = useAppDispatch();
 */

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
