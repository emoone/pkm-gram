import { IconsContext } from './IconsContext';

export function Dollar(props: IconsContext) {
  const { width = 24, height = 24 } = props;
  return (
    <svg
      className="icon dollar"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#003569"
      viewBox="0 0 24 24">
      <path d="M22 7v10h-20v-10h20m2-2h-24v14h24v-14zm-12 3c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4zm.2 5.979v.42h-.4v-.399c-.414-.007-.843-.105-1.2-.29l.181-.657c.383.146.891.305 1.29.215.46-.104.555-.577.046-.805-.372-.172-1.512-.322-1.512-1.296 0-.546.417-1.034 1.194-1.141v-.425h.401v.407c.29.007.616.058.977.168l-.145.658c-.307-.107-.646-.205-.977-.185-.595.035-.648.551-.232.766.684.322 1.576.561 1.576 1.418.002.687-.536 1.054-1.199 1.146z" />
    </svg>
  );
}
