import { IconsContext } from './IconsContext';
import cn from 'clsx';

export function Arrow(props: IconsContext) {
  const { className = '', color = '#000' } = props;
  return (
    <svg
      className={cn('icon arrow', className)}
      fill={color}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-33 -33 396.00 396.00"
      xmlSpace="preserve"
      stroke={color}
      strokeWidth="40">
      <g>
        <path
          id="XMLID_222_"
          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
        />
      </g>
    </svg>
  );
}
