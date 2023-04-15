import { IconsContext } from './IconsContext';

export function AirPlane(props: IconsContext) {
  const { width = '24', height = '24' } = props;
  return (
    <svg
      className="icon dm"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <path d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z" />
    </svg>
  );
}
