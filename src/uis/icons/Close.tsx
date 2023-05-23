import { IconsContext } from '..';
import cn from 'clsx';

export function Close(props: IconsContext) {
  const { className = '', color = '#000', width = '18', height = '18' } = props;

  return (
    <svg
      aria-label="닫기"
      className={cn('icon close', className)}
      color={color}
      fill={color}
      width={width}
      height={height}
      role="img"
      viewBox="0 0 24 24">
      <title>닫기</title>
      <polyline
        fill="none"
        points="20.643 3.357 12 12 3.353 20.647"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"></polyline>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"></line>
    </svg>
  );
}
