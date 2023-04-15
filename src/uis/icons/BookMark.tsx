import { IconsContext } from './IconsContext';

export function BookMark(props: IconsContext) {
  const { width = '24', height = '24' } = props;
  return (
    <svg
      className="icon bookmart"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z" />
    </svg>
  );
}
