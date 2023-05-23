import { IconsContext } from '..';

export function BookMark(props: IconsContext) {
  const { width = '24', height = '24', color = '#000' } = props;
  return (
    <svg
      aria-label=""
      className="icon bookmart"
      color={color}
      fill={color}
      width={width}
      height={height}
      role="img"
      viewBox="0 0 24 24">
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
