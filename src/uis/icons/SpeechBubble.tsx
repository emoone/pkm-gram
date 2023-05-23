import { IconsContext } from '..';
import cn from 'clsx';

export function SpeechBubble(props: IconsContext) {
  const { width = '24', height = '24', className = '', color = '#000' } = props;
  return (
    <svg
      aria-label=""
      className={cn('icon comment', className)}
      color={color}
      fill={color}
      width={width}
      height={height}
      role="img"
      viewBox="0 0 24 24">
      <path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
