import { IconsContext } from '../uiContext';
import cn from 'clsx';

export function Logout(props: IconsContext) {
  const { width = '24', height = '24', className = '', color = '#000' } = props;
  return (
    <svg
      className={cn('icon logout', className)}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd">
      <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z" />
    </svg>
  );
}
