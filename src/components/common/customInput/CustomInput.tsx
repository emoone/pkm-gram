import React from 'react';
import cn from 'clsx';

interface PropsType {
  type?: string;
  placeHolder?: string;
  value: string;
  onChange: (e: any) => void;
  className?: string;
}
export function CustomInput(props: PropsType) {
  const {
    type = 'text',
    placeHolder = 'placeHolder',
    value,
    onChange,
    className = '',
  } = props;

  // block rounded-5 border border-solid border-[#e6e6e6] focus:border-[#333] focus:color-[#e6e6e6]
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      className={cn('focus:ring-0 w-full bg-transparent', className)}
    />
  );
}
