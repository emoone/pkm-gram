import { IconsContext } from './IconsContext';

export function AirPlane(props: IconsContext) {
  const { width = '24', height = '24', color = '#000' } = props;
  return (
    <svg
      aria-label="airPlane"
      className="icon dm"
      color={color}
      fill={color}
      width={width}
      height={height}
      role="img"
      viewBox="0 0 24 24">
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"></polygon>
    </svg>
  );
}
